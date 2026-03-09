"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const values = [
  "金融级安全标准",
  "以人为本的设计理念",
  "持续创新研发",
  "环保可持续发展",
  "24/7 客户支持",
  "全国联保服务",
]

export function BrandPhilosophy() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-medium mb-2 block">关于丽贝卡</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              专注智能锁具
              <span className="block text-gradient-gold">守护家庭安全</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              丽贝卡（Rebekey）是一家专注于智能门锁研发与制造的品牌，
              致力于为用户提供安全、便捷、智能的门锁解决方案。
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              我们的产品采用先进的 3D 人脸识别、掌静脉识别等生物技术，
              结合 AI 智能语音和远程监控系统，让您的家更加安全可靠。
            </p>

            <ul className="space-y-4">
              {values.map((value) => (
                <li key={value} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden gradient-metallic/10 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full gradient-gold/20 blur-3xl" />
              </div>
              <div className="relative z-10 text-center p-8">
                <div className="text-7xl md:text-8xl font-bold text-gradient-gold mb-4">
                  10W+
                </div>
                <p className="text-xl text-muted-foreground">
                  服务中国家庭
                </p>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-6 shadow-xl"
            >
              <div className="text-4xl font-bold text-gradient-gold mb-1">99.9%</div>
              <p className="text-sm text-muted-foreground">识别准确率</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -top-6 -right-6 bg-card border border-border rounded-2xl p-6 shadow-xl"
            >
              <div className="text-4xl font-bold text-gradient-gold mb-1">24/7</div>
              <p className="text-sm text-muted-foreground">全天候守护</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
