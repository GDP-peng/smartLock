"use client"

import { motion } from "framer-motion"
import { Shield, Cpu, Wifi, Lock, Zap, ScanFace } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const technologies = [
  {
    icon: Shield,
    title: "金融级加密",
    description: "AES-128 位加密技术，金融级别的安全防护，保护您的数据免受未授权访问。",
    stats: "128-bit",
  },
  {
    icon: ScanFace,
    title: "3D 人脸识别",
    description: "3D 结构光人脸识别技术，毫秒级解锁速度，99.9% 识别准确率。",
    stats: "99.9%",
  },
  {
    icon: Wifi,
    title: "智能互联",
    description: "支持 WiFi、蓝牙等多种连接方式，无缝对接智能家居系统。",
    stats: "多协议",
  },
  {
    icon: Lock,
    title: "防撬报警",
    description: "内置高灵敏度传感器，检测到撬动立即报警并推送 APP 通知。",
    stats: "< 100ms",
  },
  {
    icon: Zap,
    title: "持久续航",
    description: "智能功耗管理系统，大容量锂电池，6-12 个月超长续航。",
    stats: "6-12 月",
  },
  {
    icon: Cpu,
    title: "AI 智能语音",
    description: "内置小德同学 AI 语音助手，支持语音控制、天气查询等功能。",
    stats: "AI 智能",
  },
]

const milestones = [
  { year: "2020", title: "品牌创立", description: "丽贝卡（Rebekey）品牌创立，专注于智能门锁研发与制造。" },
  { year: "2021", title: "产品上市", description: "首款智能锁产品上市，获得市场认可。" },
  { year: "2023", title: "技术突破", description: "3D 人脸识别、掌静脉识别等核心技术取得突破。" },
  { year: "2024", title: "服务 10W+ 家庭", description: "累计服务超过 10 万中国家庭，用户满意度达 99.9%。" },
]

export default function TechnologyPage() {
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
          <span className="text-primary text-sm font-medium mb-2 block">技术亮点</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            核心科技
            <span className="block text-gradient-gold">守护安全</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            丽贝卡智能锁采用先进的生物识别技术和 AI 智能系统，
            为您的家庭提供全方位的安全守护。
          </p>
        </motion.div>
      </div>

      {/* Technology Cards */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-border bg-card hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center">
                      <tech.icon className="w-6 h-6 text-black" />
                    </div>
                    <Badge variant="outline" className="font-mono">
                      {tech.stats}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{tech.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8">发展历程</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-border transform md:-translate-x-1/2" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-8 md:pl-0`}>
                <Card className="inline-block border-border bg-card">
                  <CardContent className="p-6">
                    <span className="text-primary font-mono text-sm">{milestone.year}</span>
                    <h3 className="text-xl font-semibold mt-1 mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full gradient-gold transform -translate-x-1/2 md:-translate-x-1/2 z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
