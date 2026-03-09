"use client"

import { motion } from "framer-motion"
import { Users, Award, Globe, Heart, Target, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const stats = [
  { value: "10W+", label: "服务中国家庭" },
  { value: "99.9%", label: "识别准确率" },
  { value: "24/7", label: "全天候守护" },
  { value: "全国", label: "联保服务" },
]

const values = [
  {
    icon: Target,
    title: "我们的使命",
    description: "让每个家庭都能享受到智能科技带来的安全与便捷。",
  },
  {
    icon: Lightbulb,
    title: "创新驱动",
    description: "持续投入研发，不断推出领先的生物识别技术和 AI 智能产品。",
  },
  {
    icon: Heart,
    title: "用户至上",
    description: "以用户需求为中心，提供优质的产品和贴心的服务。",
  },
]

const team = [
  { name: "产品团队", role: "专业研发", image: "P" },
  { name: "技术团队", role: "创新突破", image: "T" },
  { name: "设计团队", role: "精工美学", image: "D" },
  { name: "服务团队", role: "贴心支持", image: "S" },
]

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24 pb-20">
      {/* Hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            关于 <span className="text-gradient-gold">丽贝卡</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            丽贝卡（Rebekey）是一家专注于智能门锁研发与制造的品牌，
            致力于为用户提供安全、便捷、智能的门锁解决方案。
          </p>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">核心价值</h2>
          <p className="text-muted-foreground max-w-2xl">
            指引我们前进的理念。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-border bg-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">专业团队</h2>
          <p className="text-muted-foreground max-w-2xl">
            用心打造每一款产品。
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary border border-border flex items-center justify-center mb-4">
                <span className="text-5xl font-bold text-primary">{member.image}</span>
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-12 text-center"
        >
          <div className="absolute inset-0 gradient-metallic/10" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              选择丽贝卡 选择安全
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              探索我们的智能锁系列产品，为您的家庭提供全方位的安全守护。
            </p>
            <Link href="/products">
              <Button size="lg" className="gradient-gold text-black">
                查看产品
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
