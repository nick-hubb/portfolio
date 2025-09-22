import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header name="Nick Hubbard" />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <div id="footer" className="text-center text-sm text-muted-foreground mb-12">
        <p>Favicon provided by <a href="https://www.flaticon.com/free-icons/web-design" title="web design icons">Flaticon</a></p>
      </div>
    </main>
  )
}
