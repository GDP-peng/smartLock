"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

const qrCodes = [
  {
    name: "企业微信",
    image: "/images/contact/wechat-qr.png",
    description: "扫描二维码添加企业微信",
  },
  // 后续可以添加更多平台
  // {
  //   name: "微信公众号",
  //   image: "/images/contact/wechat-official.png",
  //   description: "扫描二维码关注公众号",
  // },
]

export default function ContactPage() {
  return (
    <div className="pt-20 md:pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium mb-2 block">联系我们</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            添加<span className="text-gradient-gold">企业微信</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            扫描二维码添加我们的企业微信，
            <br />
            获取产品咨询、报价、安装等一对一专属服务。
          </p>
        </motion.div>

        {/* QR Codes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {qrCodes.map((qr, index) => (
            <motion.div
              key={qr.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300">
                {/* QR Code Image */}
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-xl overflow-hidden bg-background border border-border">
                  <Image
                    src={qr.image}
                    alt={qr.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Platform Name */}
                <h3 className="text-xl font-semibold mb-2">{qr.name}</h3>
                <p className="text-muted-foreground text-sm">{qr.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-8">
            <h2 className="text-xl font-semibold mb-6 text-center">其他联系方式</h2>
            <div className="space-y-4">
              <ContactRow label="服务热线" value="400-XXX-XXXX" />
              <ContactRow label="商务合作" value="business@rebekey.com" />
              <ContactRow label="工作时间" value="周一至周日 9:00-21:00" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function ContactRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center justify-between py-3 border-b border-border last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-foreground font-medium">{value}</span>
        <button
          onClick={handleCopy}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="复制"
        >
          {copied ? (
            <Check className="w-4 h-4 text-primary" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  )
}
