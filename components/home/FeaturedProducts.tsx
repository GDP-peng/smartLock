"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Product } from "@/types/product"

interface FeaturedProductsProps {
  products: Product[]
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium mb-2 block">产品中心</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            热门<span className="text-gradient-gold">推荐</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            探索丽贝卡智能锁系列产品，3D 人脸识别、掌静脉解锁、AI 智能语音
            <br />
            为您的家庭提供全方位的安全守护
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/products/${product.slug}`}>
                <Card className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-secondary/50 to-secondary">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority={index === 0}
                    />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {product.isNew && (
                        <Badge variant="gold" className="text-xs">新品</Badge>
                      )}
                      {product.isFeatured && (
                        <Badge variant="secondary" className="text-xs">热销</Badge>
                      )}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="secondary" size="lg">
                        查看详情
                        <ArrowRight className="ml-2" />
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-sm text-primary font-medium mb-1">{product.series}</p>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {product.tagline}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gradient-gold">
                        ¥{product.price}
                      </span>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/products">
            <Button variant="outline" size="lg" className="min-w-[160px]">
              查看全部产品
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
