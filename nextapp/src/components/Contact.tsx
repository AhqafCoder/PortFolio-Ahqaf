'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio')
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:ahqafaliofficial@gmail.com?subject=${subject}&body=${body}`
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ahqafaliofficial@gmail.com",
      href: "mailto:ahqafaliofficial@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7084089921",
      href: "tel:+917084089921"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available for Remote Work",
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/AhqafCoder"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ahqafali"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:ahqafaliofficial@gmail.com"
    }
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-zinc-950/30">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Get In Touch</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your next project and 
            how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>
                I&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button type="submit" className="w-full bg-white text-black hover:bg-zinc-200">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Feel free to reach out through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  const content = (
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-800/50 transition-colors">
                      <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-zinc-300" />
                      </div>
                      <div>
                        <p className="font-medium text-zinc-200">{info.label}</p>
                        <p className="text-sm text-zinc-400">{info.value}</p>
                      </div>
                    </div>
                  )

                  return info.href ? (
                    <a key={index} href={info.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardHeader>
                <CardTitle>Connect with me</CardTitle>
                <CardDescription>
                  <CardDescription>
                Let&apos;s connect on social platforms.
              </CardDescription>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <Button key={index} variant="outline" size="icon" asChild>
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <Icon className="h-5 w-5" />
                        </a>
                      </Button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-600 hover:bg-green-600">Available</Badge>
                    <span className="text-sm text-zinc-400">for new projects</span>
                  </div>
                  <p className="text-sm text-zinc-400">
                    I&apos;m currently accepting new freelance projects and full-time opportunities.
                    Response time: Usually within 24 hours.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}