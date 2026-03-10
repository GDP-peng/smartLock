"use client"

import { motion } from "framer-motion"
import { Shield, Award, Users, Heart } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export function BrandPhilosophy() {
  const { t } = useLanguage()

  const stats = [
    {
      icon: Users,
      value: "10W+",
      label: t.brand.stats.families,
    },
    {
      icon: Award,
      value: "99.9%",
      label: t.brand.stats.accuracy,
    },
    {
      icon: Shield,
      value: "24/7",
      label: t.brand.stats.support,
    },
    {
      icon: Heart,
      value: "100%",
      label: t.brand.stats.satisfaction,
    },
  ]

  const values = [
    {
      icon: Shield,
      title: t.brand.values.security.title,
      description: t.brand.values.security.desc,
    },
    {
      icon: Users,
      title: t.brand.values.user.title,
      description: t.brand.values.user.desc,
    },
    {
      icon: Award,
      title: t.brand.values.innovation.title,
      description: t.brand.values.innovation.desc,
    },
    {
      icon: Heart,
      title: t.brand.values.service.title,
      description: t.brand.values.service.desc,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium mb-2 block">{t.brand.aboutBadge}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.brand.sectionTitle1} <span className="text-gradient-gold">{t.brand.sectionTitle2}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.brand.description}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-black" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
