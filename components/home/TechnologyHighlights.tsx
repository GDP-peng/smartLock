"use client"

import { motion } from "framer-motion"
import { Shield, Wifi, Fingerprint, Battery, Zap, Lock } from "lucide-react"
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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium mb-2 block">{t.technology.sectionBadge}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.technology.sectionTitle1} <span className="text-gradient-gold">{t.technology.sectionTitle2}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.technology.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
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
