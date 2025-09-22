"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Code, Award } from "lucide-react"

const experience = [
  {
    company: "Stack Sports",
    role: "Senior Software Engineer",
    duration: "June 2017 - Present",
    description: "Building front-end solutions for national race timing and technology company. Managing GetMeRegistered.com platform serving 200k+ annual registrations for endurance events nationwide.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "Team Leadership"]
  },
  {
    company: "Twebor LLC",
    role: "Co-Founder & Lead Technology Adviser",
    duration: "May 2021 - Present",
    description: "Startup providing software and business advice for emerging companies. Delivering comprehensive solutions including websites, mobile apps, and technical consulting.",
    technologies: ["Web Development", "Tech Consulting", "Business Strategy"]
  },
  {
    company: "Kiddom",
    role: "Developer (Contract)",
    duration: "Contract",
    description: "Developed transformative teaching and personalized learning platform for educators and students, focusing on SEO optimization and full-stack development.",
    technologies: ["Ruby on Rails", "Frontend", "Backend"]
  }
]

const projects = [
  {
    name: "RoxyRing Trading Website",
    description: "Full-stack e-commerce platform with custom database design for users, inventory, and blogging system.",
    technologies: ["Ruby on Rails", "HTML5", "CSS3", "JavaScript", "MySQL"]
  },
  {
    name: "Ebbert Wedding Website",
    description: "Custom wedding website with guest book functionality, photo gallery, and secure database integration.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"]
  },
  {
    name: "Teaching Candidate Classification System",
    description: "Data mining project using DBSCAN and K-Nearest Neighbors algorithms to classify teaching candidates based on feature analysis.",
    technologies: ["Java", "Data Mining", "Machine Learning", "DBSCAN", "K-NN"]
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">About Me</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            A passionate Computer Science graduate with 8+ years of experience building innovative software solutions
          </p>
        </div>

        {/* Professional Summary */}
        <Card className="p-8 mb-12 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/10">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                Highly motivated Computer Science graduate with a passion for developing innovative solutions to complex software challenges. 
                I bring a collaborative approach and entrepreneurial spirit to every project, with a strong focus on continuous learning and 
                staying current with advancing technologies. My goal-oriented mindset drives me to challenge barriers and expand my knowledge base 
                while delivering exceptional results for clients and teams.
              </p>
            </div>
          </div>
        </Card>

        {/* Experience Timeline */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-6 w-6 text-primary" />
            <h3 className="text-3xl font-bold">Professional Experience</h3>
          </div>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-primary">{job.role}</h4>
                    <p className="text-lg font-medium text-foreground">{job.company}</p>
                    <p className="text-sm text-muted-foreground">{job.duration}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Notable Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h3 className="text-3xl font-bold">Notable Projects</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h4 className="text-lg font-semibold mb-3 text-primary">{project.name}</h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <Card className="p-6 bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-accent/10">
              <GraduationCap className="h-6 w-6 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2">Education</h3>
              <div className="space-y-2">
                <div>
                  <h4 className="text-lg font-medium">B.S. Computer Science</h4>
                  <p className="text-muted-foreground">Purdue University (Indianapolis) • August 2012 - May 2016</p>
                  <p className="text-sm text-muted-foreground">GPA: 3.24</p>
                </div>
                <div className="mt-4">
                  <h5 className="font-medium text-sm text-foreground mb-1">Graduating Project</h5>
                  <p className="text-sm text-muted-foreground">
                    Created a data mining model using DBSCAN and K-Nearest Neighbors algorithms in Java to classify 
                    high school teaching candidates based on feature analysis, helping determine optimal hiring decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
