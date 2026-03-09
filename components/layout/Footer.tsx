import Link from "next/link"
import Image from "next/image"
import { Share2 } from "lucide-react"

const footerLinks = {
  products: [
    { href: "/products", label: "全部产品" },
    { href: "/products#a-series", label: "AI 智能系列" },
    { href: "/products#mate-series", label: "经典系列" },
  ],
  company: [
    { href: "/about", label: "关于我们" },
    { href: "/technology", label: "技术亮点" },
    { href: "/contact", label: "联系我们" },
  ],
  support: [
    { href: "/faq", label: "常见问题" },
    { href: "/warranty", label: "保修政策" },
    { href: "/installation", label: "安装指南" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="mb-4 block">
              <Image
                src="/images/logo/rebekey.png"
                alt="Rebekey 丽贝卡"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              丽贝卡智能锁，专注于智能门锁研发与制造，
              为您的家庭安全保驾护航。
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
            <h3 className="font-semibold text-foreground mb-4">产品中心</h3>
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
            <h3 className="font-semibold text-foreground mb-4">关于我们</h3>
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

          {/* Support Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">客户支持</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
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
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rebekey 丽贝卡 版权所有
          </p>
          <p className="text-sm text-muted-foreground">
            专注智能锁具 · 守护家庭安全
          </p>
        </div>
      </div>
    </footer>
  )
}
