"use client"

import { motion } from "framer-motion"
import { Shield, Award, Users, Heart } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "10W+",
    label: "服务中国家庭",
  },
  {
    icon: Award,
    value: "99.9%",
    label: "识别准确率",
  },
  {
    icon: Shield,
    value: "24/7",
    label: "全天候守护",
  },
  {
    icon: Heart,
    value: "100%",
    label: "客户满意度",
  },
]

const values = [
  {
    icon: Shield,
    title: "金融级安全标准",
    description: "采用 AES-128 位加密技术，防撬报警，全方位守护家庭安全。",
  },
  {
    icon: Users,
    title: "以人为本的设计理念",
    description: "简洁易用的交互设计，老人小孩都能轻松使用。",
  },
  {
    icon: Award,
    title: "持续创新研发",
    description: "专注生物识别技术，不断推出行业领先的智能锁产品。",
  },
  {
    icon: Heart,
    title: "全国联保服务",
    description: "24/7 客户支持，全国联保，让您无后顾之忧。",
  },
]

export function BrandPhilosophy() {
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
          <span className="text-primary text-sm font-medium mb-2 block">关于丽贝卡</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            专注智能锁具 <span className="text-gradient-gold">守护家庭安全</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            丽贝卡（Rebekey）是一家专注于智能门锁研发与制造的品牌，
            <br />
            致力于为用户提供安全、便捷、智能的门锁解决方案。
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
