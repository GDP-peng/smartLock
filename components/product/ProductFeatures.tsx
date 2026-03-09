"use client"

import { motion } from "framer-motion"
import type { Feature } from "@/types/product"
import { Fingerprint, Wifi, Shield, Battery, Zap, Lock, Video, Activity, Users, Server, ShieldCheck, FileText, Key, Bluetooth, Clock, ScanFace, Mic } from "lucide-react"

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((feature, index) => {
        const Icon = iconMap[feature.icon] || Zap
        return (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex gap-4 p-4 rounded-xl bg-secondary/50 border border-border"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg gradient-gold flex items-center justify-center">
              <Icon className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
