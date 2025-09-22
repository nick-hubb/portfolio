"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Sparkles } from "lucide-react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(105, 179, 254, ${particle.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-90" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/75 border border-accent/30">
                <Sparkles className="h-4 w-4 text-accent-foreground" />
                <span className="text-sm text-accent-foreground font-medium">Available for new opportunities</span>
              </div>

              <h1 className="text-8xl md:text-6xl font-bold mb-6 text-balance">
                <span className="bg-gradient-to-r from-accent via-primary to-foreground bg-clip-text text-transparent">
                  Nick Hubbard
                </span>
                <br />
                <span className="text-foreground">Software Engineer</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance leading-relaxed">
                Passionate developer crafting innovative solutions 
                <br />
                with clean code.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
                <Button size="lg" className="group animate-glow">
                  <Code className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  View My Work
                </Button>
                <Button variant="outline" size="lg">
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="h-96 lg:h-[500px] w-full relative">
              <img
                src="/hero-image-self.png"
                alt="Nick Hubbard"
                className="object-cover w-full h-full absolute inset-0"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary/25 rounded-full blur-xl animate-float" />
        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent/75 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-primary/75 rounded-full blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        />
    </section>
  )
}
