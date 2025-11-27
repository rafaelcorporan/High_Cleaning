// ===================================
// Cloudflare Worker - Email API
// ===================================
// This function handles quote requests using Cloudflare Workers
// Deploy to: /api/send-quote

export async function onRequest(context) {
    const { request, env } = context;

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
        return new Response(null, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
        });
    }

    // Only allow POST requests
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({
            success: false,
            message: 'Method not allowed'
        }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        // Parse request body
        const data = await request.json();
        const { name, email, phone, facilitySize, message } = data;

        // Validate required fields
        if (!name || !email) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Company name and email are required'
            }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Invalid email address'
            }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
            });
        }

        // Format facility size
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
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { 
      background: linear-gradient(135deg, #00ced1 0%, #ff6347 100%); 
      color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; 
    }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
    .field { 
      margin-bottom: 15px; padding: 10px; background: white; 
      border-left: 4px solid #00ced1; 
    }
    .field-label { font-weight: bold; color: #00ced1; margin-bottom: 5px; }
    .field-value { color: #333; }
    .footer { text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✨ New Quote Request</h1>
      <p>CrystalCore - Real Cleaning Solutions</p>
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
      <p>This quote request was submitted from the CrystalCore website.</p>
      <p>Please respond to the customer at: ${email}</p>
    </div>
  </div>
</body>
</html>
    `;

        // Send email using MailChannels (free for Cloudflare Workers)
        const emailResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                personalizations: [
                    {
                        to: [{ email: env.RECIPIENT_EMAIL, name: 'CrystalCore Team' }],
                        reply_to: { email: email, name: name },
                    },
                ],
                from: {
                    email: env.SENDER_EMAIL || 'noreply@crystalcore.com',
                    name: 'CrystalCore Website',
                },
                subject: `New Quote Request from ${name}`,
                content: [
                    {
                        type: 'text/html',
                        value: emailContent,
                    },
                    {
                        type: 'text/plain',
                        value: `
New Quote Request

Company Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Facility Size: ${facilitySizeDisplay}
Additional Details: ${message || 'No additional details provided'}
            `,
                    },
                ],
            }),
        });

        if (!emailResponse.ok) {
            throw new Error(`MailChannels API error: ${emailResponse.status}`);
        }

        // Return success response
        return new Response(JSON.stringify({
            success: true,
            message: 'Quote request sent successfully!',
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        });

    } catch (error) {
        console.error('Error sending email:', error);

        return new Response(JSON.stringify({
            success: false,
            message: 'Failed to send quote request. Please try again later.',
            error: error.message,
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        });
    }
}
