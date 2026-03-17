"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Product } from "@/types/product"
import { useLanguage } from "@/lib/i18n/LanguageContext"

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { t } = useLanguage()
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }}
    >
      <Link href={`/products/${product.slug}`}>
        <Card className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-500 h-full card-lift">
          <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-secondary/80 to-secondary/50">
            {/* Loading skeleton */}
            {!isImageLoaded && (
              <div className="absolute inset-0 image-loading" />
            )}
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className={`object-cover group-hover:scale-110 transition-transform duration-700 ease-out ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              priority={index < 3}
              onLoad={() => setIsImageLoaded(true)}
              onError={() => setIsImageLoaded(true)}
            />

            {/* Gradient overlay at bottom */}
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

            {/* Hover Overlay - Enhanced */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                className="group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="shadow-xl border border-primary/20"
                >
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
              <span className="text-2xl font-bold text-gradient-gold">
                ¥{product.price}
              </span>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-2" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
