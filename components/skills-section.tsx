"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Cloud, GitBranch, Globe, Code } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "NextJS", "HTML5", "CSS3", "JavaScript"],
    color: "text-blue-400",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["PHP", "NodeJS", "Ruby on Rails", "Java"],
    color: "text-green-400",
  },
  {
    title: "Database & Data",
    icon: GitBranch,
    skills: ["MySQL", "Data Mining", "Machine Learning", "DBSCAN", "K-NN"],
    color: "text-orange-400",
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    skills: ["AWS EC2", "AWS S3", "Git", "GitHub", "SEO"],
    color: "text-cyan-400",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Technologies I Work With</h2>
          <p className="text-xl text-muted-foreground text-balance">
            A comprehensive toolkit for building modern applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.title}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-muted group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>

        {/* Interactive skill cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">All Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skillCategories
              .flatMap((cat) => cat.skills)
              .map((skill, index) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-lg py-2 px-4 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-200 cursor-default"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {skill}
                </Badge>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
