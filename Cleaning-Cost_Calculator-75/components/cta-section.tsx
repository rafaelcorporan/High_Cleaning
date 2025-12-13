"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, MessageSquare, Send } from "lucide-react"

export function CTASection() {
  const [chatOpen, setChatOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm here to help you get a transparent quote. What's your facility size?" },
  ])

  const handleSend = () => {
    if (!message.trim()) return
    setMessages((prev) => [...prev, { role: "user", content: message }])
    setMessage("")

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Great! Based on that size, I'd recommend our Executive tier. Would you like me to prepare a detailed quote with transparent pricing breakdown?",
        },
      ])
    }, 1000)
  }

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative rounded-2xl border border-[#E6F0FA]/20 bg-gradient-to-br from-card via-card to-[#E6F0FA]/5 p-8 lg:p-12 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E6F0FA]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#2E8B57]/5 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: CTA content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2E8B57]/30 bg-[#2E8B57]/10 mb-6">
                <div className="h-2 w-2 rounded-full bg-[#2E8B57] animate-pulse" />
                <span className="text-xs font-medium text-[#2E8B57]">Free Quote in 2 Minutes</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance leading-tight">
                Get Your Transparent Quote
              </h2>

              <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-lg">
                No hidden fees. No surprises. Just honest pricing based on $25/hr labor, ISSA staffing standards, and
                DGS-sourced materials.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => setChatOpen(true)}
                  className="gap-2 bg-[#E6F0FA] text-[#0A2540] hover:bg-[#E6F0FA]/90 font-semibold"
                >
                  <MessageSquare className="h-4 w-4" />
                  Start AI Quote Builder
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-[#E6F0FA]/20 hover:bg-[#E6F0FA]/5 bg-transparent text-foreground"
                >
                  Call (732) 555-CLEAN
                </Button>
              </div>

              {/* Trust points */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span>No credit card required</span>
                <span>Response within 24 hours</span>
                <span>Cancel anytime</span>
              </div>
            </div>

            {/* Right: AI Chat preview */}
            <div
              className={`rounded-xl border border-border bg-background shadow-2xl shadow-black/20 overflow-hidden transition-all duration-500 ${chatOpen ? "scale-100 opacity-100" : "scale-95 opacity-90"}`}
            >
              {/* Chat header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E6F0FA] to-[#E6F0FA]/60 flex items-center justify-center">
                    <span className="text-xs font-bold text-[#0A2540]">CC</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">CrystalCore Assistant</div>
                    <div className="text-xs text-[#2E8B57] flex items-center gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#2E8B57]" />
                      Online
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat messages */}
              <div className="h-64 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${
                        msg.role === "user" ? "bg-[#E6F0FA] text-[#0A2540]" : "bg-secondary text-foreground"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat input */}
              <div className="p-4 border-t border-border bg-card">
                <div className="flex gap-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type your facility size..."
                    className="flex-1 bg-background border-border"
                  />
                  <Button
                    size="icon"
                    onClick={handleSend}
                    className="bg-[#E6F0FA] text-[#0A2540] hover:bg-[#E6F0FA]/90"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
