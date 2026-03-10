"use client"

import Link from "next/link"
import Image from "next/image"
import { Share2 } from "lucide-react"
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
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="mb-4 block">
              <Image
                src="/images/logo/rebekey.png"
                alt="Rebekey"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              {t.footer.brandDesc}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://weixin.qq.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="微信"
              >
                <Share2 className="w-5 h-5" />
              </a>
              <a
                href="https://weibo.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="微博"
              >
                <span className="text-xs font-bold border border-current rounded px-1">微博</span>
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.footer.productsTitle}</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.footer.companyTitle}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column - Removed for pre-sales focus */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rebekey {t.common.copyright}
          </p>
          <p className="text-sm text-muted-foreground">
            {t.common.brandSlogan}
          </p>
        </div>
      </div>
    </footer>
  )
}
