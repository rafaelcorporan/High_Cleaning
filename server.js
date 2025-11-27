// ===================================
// High Cleaning - Email Server
// ===================================

require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(__dirname));

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error('❌ SMTP Configuration Error:', error);
  } else {
    console.log('✅ Server is ready to send emails');
  }
});

// Email sending endpoint
app.post('/api/send-quote', async (req, res) => {
  try {
    const { name, email, phone, facilitySize, message } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Company name and email are required'
      });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address'
      });
    }

    // Format facility size for display
    const facilitySizeMap = {
      'small': 'Small (1,000–3,000 sq. ft.)',
      'medium': 'Medium (3,000–8,000 sq. ft.)',
      'large': 'Large (8,000–20,000+ sq. ft.)'
    };
    const facilitySizeDisplay = facilitySizeMap[facilitySize] || facilitySize || 'Not specified';

    // Prepare email content
    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #00ced1 0%, #ff6347 100%);
      color: white;
      padding: 30px;
      text-align: center;
      border-radius: 10px 10px 0 0;
    }
    .content {
      background: #f9f9f9;
      padding: 30px;
      border-radius: 0 0 10px 10px;
    }
    .field {
      margin-bottom: 15px;
      padding: 10px;
      background: white;
      border-left: 4px solid #00ced1;
    }
    .field-label {
      font-weight: bold;
      color: #00ced1;
      margin-bottom: 5px;
    }
    .field-value {
      color: #333;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      padding: 20px;
      color: #666;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✨ New Quote Request</h1>
      <p>High Cleaning - Real Cleaning Solutions</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">Company Name:</div>
        <div class="field-value">${name}</div>
      </div>
      <div class="field">
        <div class="field-label">Email:</div>
        <div class="field-value">${email}</div>
      </div>
      <div class="field">
        <div class="field-label">Phone:</div>
        <div class="field-value">${phone || 'Not provided'}</div>
      </div>
      <div class="field">
        <div class="field-label">Facility Size:</div>
        <div class="field-value">${facilitySizeDisplay}</div>
      </div>
      <div class="field">
        <div class="field-label">Additional Details:</div>
        <div class="field-value">${message || 'No additional details provided'}</div>
      </div>
    </div>
    <div class="footer">
      <p>This quote request was submitted from the High Cleaning website.</p>
      <p>Please respond to the customer at: ${email}</p>
    </div>
  </div>
</body>
</html>
    `;

    // Email options
    const mailOptions = {
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.SMTP_FROM_EMAIL, // Send to your own email
      replyTo: email, // Allow easy reply to customer
      subject: `New Quote Request from ${name}`,
      html: emailContent,
      text: `
New Quote Request

Company Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Facility Size: ${facilitySizeDisplay}
Additional Details: ${message || 'No additional details provided'}
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('✅ Email sent successfully:', info.messageId);
    console.log('📧 Quote request from:', name, '(' + email + ')');

    res.json({
      success: true,
      message: 'Quote request sent successfully!',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send quote request. Please try again later.',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

// Serve index.html for root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log('=================================');
  console.log('✨ High Cleaning Email Server');
  console.log('=================================');
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 SMTP configured: ${process.env.SMTP_HOST}:${process.env.SMTP_PORT}`);
  console.log(`📬 Sending from: ${process.env.SMTP_FROM_EMAIL}`);
  console.log('=================================');
});
