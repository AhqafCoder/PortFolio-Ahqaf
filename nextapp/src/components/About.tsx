'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Code, Cpu, Database, Globe, GraduationCap, Award } from "lucide-react"

const skills = [
  { category: "Frontend", icon: Globe, items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "JavaScript"] },
  { category: "Backend", icon: Database, items: ["Node.js", "Express.js", "PostgreSQL", "MySQL", "REST APIs"] },
  { category: "Database", icon: Database, items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firebase"] },
  { category: "Cloud & DevOps", icon: Cpu, items: ["Google Cloud", "Firebase", "Vercel", "Linux VPS", "CI/CD"] },
  { category: "Auth & Security", icon: Code, items: ["OAuth 2.0", "Clerk", "JWT", "Firebase Auth", "Google Cloud Console"] }
]

const achievements = [
  {
    title: "Hackathon Winner (INVERTHON 2025 & TECHATHON 2024)",
    description: "Won two university-level hackathons, leading teams to develop innovative tech solutions",
    icon: Award
  },
  {
    title: "800+ Open Source Contributions",
    description: "Active GitHub contributor helping professionals and students with clean, optimized code",
    icon: Code
  },
  {
    title: "International Client Project",
    description: "Successfully delivered a professional healing website for a client from London, UK",
    icon: Globe
  },
  {
    title: "Community Management & Leadership",
    description: "Managed 400+ member Discord community and organized university tech events",
    icon: Cpu
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-zinc-950/30">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            I&apos;m a passionate Full-Stack Developer with a strong foundation in computer science 
            and a love for creating innovative web solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Info */}
          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Background
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-zinc-200">Education</h4>
                  <p className="text-zinc-400">B.Tech in Computer Science</p>
                  <p className="text-sm text-zinc-500">Invertis University, Bareilly (2024-2028)</p>
                </div>
                
                <Separator className="bg-zinc-800" />
                
                <div>
                  <h4 className="font-semibold text-zinc-200">Experience</h4>
                  <p className="text-zinc-400">Full-Stack Developer & Community Manager</p>
                  <p className="text-sm text-zinc-500">
                    OpenGeek Tech Community, InvertisPrep, Game Server Management
                  </p>
                </div>
                
                <Separator className="bg-zinc-800" />
                
                <div>
                  <h4 className="font-semibold text-zinc-200">Specializations</h4>
                  <p className="text-zinc-400">MVP Development, AI Integration, Community Building</p>
                  <p className="text-sm text-zinc-500">Google Developer Group Member, TEDx Organizer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Key Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <div key={index} className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center">
                        <Icon className="h-4 w-4 text-zinc-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-200">{achievement.title}</h4>
                        <p className="text-sm text-zinc-400">{achievement.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center">Technical Skills</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon
              return (
                <Card key={index} className="bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900/70 transition-colors">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Icon className="h-5 w-5 text-zinc-300" />
                      {skillGroup.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}