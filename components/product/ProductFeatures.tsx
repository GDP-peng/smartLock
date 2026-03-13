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
            className="flex gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-secondary/50 border border-border"
          >
            {/* 图标：手机上小一些，电脑上正常 */}
            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg gradient-gold flex items-center justify-center">
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-black" />
            </div>
            <div className="flex-1 min-w-0">
              {/* 标题和描述字号响应式调整 */}
              <h3 className="font-semibold text-sm md:text-base mb-1">{feature.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
