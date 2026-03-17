"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Product } from "@/types/product"
import { useLanguage } from "@/lib/i18n/LanguageContext"

interface FeaturedProductsProps {
  products: Product[]
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 gradient-radial-primary opacity-30 pointer-events-none" />

      {/* Section background */}
      <div className="absolute inset-0 section-alt opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border mb-4"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{t.featuredProducts.sectionBadge}</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t.featuredProducts.sectionTitle1}<span className="text-gradient-primary-shimmer">{t.featuredProducts.sectionTitle2}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.featuredProducts.description}
          </p>
        </motion.div>

        {/* Products Grid */}
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
                <Card className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-500 h-full card-lift">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-accent/50 to-accent">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      priority={index === 0}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {product.isNew && (
                        <Badge variant="gold" className="text-xs shadow-lg">
                          <Sparkles className="w-3 h-3 mr-1" />
                          {t.common.new}
                        </Badge>
                      )}
                      {product.isFeatured && (
                        <Badge variant="secondary" className="text-xs shadow-lg">
                          <Sparkles className="w-3 h-3 mr-1" />
                          {t.common.hot}
                        </Badge>
                      )}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        className="group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
                      >
                        <Button variant="secondary" size="lg" className="shadow-xl border border-primary/20">
                          {t.common.viewDetails}
                          <ArrowRight className="ml-2" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-sm text-primary font-medium mb-1 tracking-wide">{product.series}</p>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                      {product.tagline}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gradient-primary">
                        ¥{product.price}
                      </span>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/products">
            <Button
              variant="outline"
              size="lg"
              className="min-w-[160px] border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              {t.featuredProducts.viewAll}
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
