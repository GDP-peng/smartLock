"use client"

import { motion } from "framer-motion"
import { Shield, Wifi, Fingerprint, Battery, Zap, Lock, Cpu } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export function TechnologyHighlights() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Fingerprint,
      title: t.technology.features.face,
      description: t.technology.features.faceDesc,
    },
    {
      icon: Wifi,
      title: t.technology.features.smart,
      description: t.technology.features.smartDesc,
    },
    {
      icon: Shield,
      title: t.technology.features.security,
      description: t.technology.features.securityDesc,
    },
    {
      icon: Battery,
      title: t.technology.features.battery,
      description: t.technology.features.batteryDesc,
    },
    {
      icon: Zap,
      title: t.technology.features.unlock,
      description: t.technology.features.unlockDesc,
    },
    {
      icon: Lock,
      title: t.technology.features.monitor,
      description: t.technology.features.monitorDesc,
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
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{t.technology.sectionBadge}</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.technology.sectionTitle1} <span className="text-gradient-gold-shimmer">{t.technology.sectionTitle2}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.technology.description}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background rounded-2xl p-5 md:p-8 border border-border hover:border-primary/50 transition-all duration-500 h-full card-lift overflow-hidden relative">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 gradient-radial-gold opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

                {/* Icon with glow effect */}
                <div className="relative">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl gradient-gold flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:shadow-gold transition-all duration-500">
                    <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-black" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
