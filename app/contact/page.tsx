"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Copy, Check } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export default function ContactPage() {
  const { t } = useLanguage()

  const qrCodes = [
    {
      name: t.contactPage.wechat.name,
      image: "/images/contact/wechat-qr.png",
      description: t.contactPage.wechat.description,
    },
  ]
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
          <span className="text-primary text-sm font-medium mb-2 block">{t.contactPage.badge}</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.contactPage.title1}<span className="text-gradient-primary-shimmer">{t.contactPage.title2}</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.contactPage.description}
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
            <h2 className="text-xl font-semibold mb-6 text-center">{t.contactPage.otherTitle}</h2>
            <div className="space-y-4">
              <ContactRow label={t.contactPage.hotline.label} value={t.contactPage.hotline.value} />
              <ContactRow label={t.contactPage.business.label} value={t.contactPage.business.value} />
              <ContactRow label={t.contactPage.hours.label} value={t.contactPage.hours.value} />
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
