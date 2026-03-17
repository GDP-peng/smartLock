"use client"

import { motion } from "framer-motion"
import type { Feature } from "@/types/product"
import { Fingerprint, Wifi, Shield, Battery, Zap, Lock, Video, Activity, Users, Server, ShieldCheck, FileText, Key, Bluetooth, Clock, ScanFace, Mic, Sparkles } from "lucide-react"

interface ProductFeaturesProps {
  features: Feature[]
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  fingerprint: Fingerprint,
  wifi: Wifi,
  shield: Shield,
  battery: Battery,
  zap: Zap,
  lock: Lock,
  face: ScanFace,
  video: Video,
  voice: Mic,
  activity: Activity,
  users: Users,
  server: Server,
  "shield-check": ShieldCheck,
  "file-text": FileText,
  key: Key,
  bluetooth: Bluetooth,
  clock: Clock,
}

export function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {features.map((feature, index) => {
        const Icon = iconMap[feature.icon] || Zap
        return (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group flex gap-3 md:gap-4 p-4 md:p-5 rounded-xl bg-accent/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-blue/20"
          >
            {/* Icon with glow effect */}
            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:shadow-blue transition-shadow duration-300">
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm md:text-base mb-1 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
