"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, MessageCircle, ArrowRight } from "lucide-react"

export function ContactSection() {
  const handleEmailClick = () => {
    window.location.href = "mailto:your.email@example.com?subject=Let's work together!"
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Let's Build Something Amazing</h2>
          <p className="text-xl text-muted-foreground text-balance">
            Ready to bring your ideas to life? Let's start a conversation.
          </p>
        </div>

        <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-card to-muted/20 border-primary/20">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Ready to collaborate?</h3>
            <p className="text-muted-foreground text-lg mb-8 text-balance">
              Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleEmailClick} className="group animate-glow">
              <MessageCircle className="mr-2 h-5 w-5" />
              Send me an email
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
