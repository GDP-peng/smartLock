"use client"

import { motion } from "framer-motion"
import { Shield, Cpu, Wifi, Lock, Zap, ScanFace } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export default function TechnologyPage() {
  const { t } = useLanguage()

  const technologies = [
    {
      icon: Shield,
      title: t.technologyPage.tech.encryption.title,
      description: t.technologyPage.tech.encryption.desc,
      stats: t.technologyPage.tech.encryption.stats,
    },
    {
      icon: ScanFace,
      title: t.technologyPage.tech.face.title,
      description: t.technologyPage.tech.face.desc,
      stats: t.technologyPage.tech.face.stats,
    },
    {
      icon: Wifi,
      title: t.technologyPage.tech.smart.title,
      description: t.technologyPage.tech.smart.desc,
      stats: t.technologyPage.tech.smart.stats,
    },
    {
      icon: Lock,
      title: t.technologyPage.tech.alarm.title,
      description: t.technologyPage.tech.alarm.desc,
      stats: t.technologyPage.tech.alarm.stats,
    },
    {
      icon: Zap,
      title: t.technologyPage.tech.battery.title,
      description: t.technologyPage.tech.battery.desc,
      stats: t.technologyPage.tech.battery.stats,
    },
    {
      icon: Cpu,
      title: t.technologyPage.tech.ai.title,
      description: t.technologyPage.tech.ai.desc,
      stats: t.technologyPage.tech.ai.stats,
    },
  ]

  const milestones = t.technologyPage.milestones.items

  return (
    <div className="pt-20 md:pt-24 pb-20">
      {/* Hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-primary text-sm font-medium mb-2 block">{t.technologyPage.badge}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t.technologyPage.title1}
            <span className="block text-gradient-primary-shimmer">{t.technologyPage.title2}</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            {t.technologyPage.description}
          </p>
        </motion.div>
      </div>

      {/* Technology Cards */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-border bg-card hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                      <tech.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="font-mono">
                      {tech.stats}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{tech.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8">{t.technologyPage.milestones.title}</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-border transform md:-translate-x-1/2" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-8 md:pl-0`}>
                <Card className="inline-block border-border bg-card">
                  <CardContent className="p-6">
                    <span className="text-primary font-mono text-sm">{milestone.year}</span>
                    <h3 className="text-xl font-semibold mt-1 mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.desc}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full gradient-primary transform -translate-x-1/2 md:-translate-x-1/2 z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
