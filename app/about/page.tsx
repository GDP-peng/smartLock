"use client"

import { motion } from "framer-motion"
import { Users, Award, Globe, Heart, Target, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export default function AboutPage() {
  const { t } = useLanguage()

  const stats = [
    { value: "10W+", label: t.aboutPage.stats.families },
    { value: "99.9%", label: t.aboutPage.stats.accuracy },
    { value: "24/7", label: t.aboutPage.stats.support },
    { value: t.aboutPage.stats.warranty, label: "" },
  ]

  const values = [
    {
      icon: Target,
      title: t.aboutPage.values.mission.title,
      description: t.aboutPage.values.mission.desc,
    },
    {
      icon: Lightbulb,
      title: t.aboutPage.values.innovation.title,
      description: t.aboutPage.values.innovation.desc,
    },
    {
      icon: Heart,
      title: t.aboutPage.values.user.title,
      description: t.aboutPage.values.user.desc,
    },
  ]

  const team = [
    { name: t.aboutPage.team.product.name, role: t.aboutPage.team.product.role, image: "P" },
    { name: t.aboutPage.team.tech.name, role: t.aboutPage.team.tech.role, image: "T" },
    { name: t.aboutPage.team.design.name, role: t.aboutPage.team.design.role, image: "D" },
    { name: t.aboutPage.team.service.name, role: t.aboutPage.team.service.role, image: "S" },
  ]
  return (
    <div className="pt-20 md:pt-24 pb-20">
      {/* Hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t.aboutPage.title1} <span className="text-gradient-gold">{t.aboutPage.title2}</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            {t.aboutPage.description}
          </p>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t.aboutPage.values.title}</h2>
          <p className="text-muted-foreground max-w-2xl">
            {t.aboutPage.values.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-border bg-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t.aboutPage.team.title}</h2>
          <p className="text-muted-foreground max-w-2xl">
            {t.aboutPage.team.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary border border-border flex items-center justify-center mb-4">
                <span className="text-5xl font-bold text-primary">{member.image}</span>
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-12 text-center"
        >
          <div className="absolute inset-0 gradient-metallic/10" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.aboutPage.cta.title}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {t.aboutPage.cta.description}
            </p>
            <Link href="/products">
              <Button size="lg" className="gradient-gold text-black">
                {t.aboutPage.cta.button}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
