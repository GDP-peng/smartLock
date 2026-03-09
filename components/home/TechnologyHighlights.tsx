"use client"

import { motion } from "framer-motion"
import { Shield, Wifi, Fingerprint, Battery, Zap, Lock } from "lucide-react"

const features = [
  {
    icon: Fingerprint,
    title: "3D 人脸识别",
    description: "3D 结构光人脸识别技术，0.3 秒快速解锁，99.9% 准确率。",
  },
  {
    icon: Wifi,
    title: "智能互联",
    description: "支持 APP 远程控制，小德同学 AI 语音，智能家居联动。",
  },
  {
    icon: Shield,
    title: "金融级安全",
    description: "AES-128 位加密，防撬报警，全方位守护家庭安全。",
  },
  {
    icon: Battery,
    title: "持久续航",
    description: "大容量锂电池，6-12 个月超长续航，Type-C 应急供电。",
  },
  {
    icon: Zap,
    title: "多种开锁方式",
    description: "人脸/掌静脉/指纹/密码/IC 卡/钥匙，满足全家需求。",
  },
  {
    icon: Lock,
    title: "实时监控",
    description: "门外逗留抓拍，APP 实时推送，远程可视对讲。",
  },
]

export function TechnologyHighlights() {
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
          <span className="text-primary text-sm font-medium mb-2 block">技术亮点</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            核心科技 <span className="text-gradient-gold">守护安全</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            丽贝卡智能锁采用先进的生物识别技术和 AI 智能系统，
            <br />
            为您的家庭提供全方位的安全守护。
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
