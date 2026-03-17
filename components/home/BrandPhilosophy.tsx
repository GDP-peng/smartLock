"use client"

import { motion } from "framer-motion"
import { Shield, Award, Users, Heart, Trophy } from "lucide-react"
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
      {/* Background Pattern - Enhanced */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 gradient-radial-gold opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border mb-4"
          >
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{t.brand.aboutBadge}</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.brand.sectionTitle1} <span className="text-gradient-gold-shimmer">{t.brand.sectionTitle2}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.brand.description}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              {/* Icon with enhanced glow effect */}
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 group-hover:shadow-gold transition-all duration-500">
                <stat.icon className="w-5 h-5 md:w-7 md:h-7 text-black" />
              </div>
              {/* Value */}
              <div className="text-3xl md:text-5xl font-bold text-gradient-gold mb-1 md:mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
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
              <div className="bg-background rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-500 h-full card-lift overflow-hidden relative">
                {/* Subtle inner glow on hover */}
                <div className="absolute inset-0 gradient-radial-gold opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

                {/* Icon */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-gold transition-all duration-500">
                    <value.icon className="w-6 h-6 text-black" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
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
