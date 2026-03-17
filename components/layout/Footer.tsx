"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Share2, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export function Footer() {
  const { t } = useLanguage()

  const footerLinks = {
    products: [
      { href: "/products", label: t.footer.allProducts },
      { href: "/products#a-series", label: t.footer.aiSeries },
      { href: "/products#mate-series", label: t.footer.classicSeries },
    ],
    company: [
      { href: "/about", label: t.footer.about },
      { href: "/technology", label: t.footer.technology },
      { href: "/contact", label: t.footer.contact },
    ],
  }

  return (
    <footer className="border-t border-border bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 gradient-radial-primary opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="mb-4 block group">
                <Image
                  src="/images/logo/rebekey.png"
                  alt="Rebekey"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
                />
              </Link>
              <p className="text-muted-foreground text-sm mb-6 max-w-xs leading-relaxed">
                {t.footer.brandDesc}
              </p>
              <div className="flex items-center gap-4">
                <motion.a
                  href="https://weixin.qq.com"
                  className="text-muted-foreground hover:text-primary transition-all duration-300"
                  aria-label="微信"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://weibo.com"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 text-xs font-bold border border-current rounded px-2 py-1"
                  aria-label="微博"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  微博
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Products Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              {t.footer.productsTitle}
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              {t.footer.companyTitle}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rebekey {t.common.copyright}
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-primary" />
            {t.common.brandSlogan}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
