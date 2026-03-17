"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProductGallery } from "@/components/product/ProductGallery"
import { ProductFeatures } from "@/components/product/ProductFeatures"
import { ProductSpecs } from "@/components/product/ProductSpecs"
import { ProductDetailImages } from "@/components/product/ProductDetailImages"
import { Shield, Truck, RotateCcw, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import type { Product } from "@/types/product"

interface ProductDetailContentProps {
  product: Product
}

export function ProductDetailContent({ product }: ProductDetailContentProps) {
  const { t } = useLanguage()

  const benefits = [
    { icon: Truck, text: t.productDetail.freeShipping },
    { icon: Shield, text: t.productDetail.warranty },
    { icon: RotateCcw, text: t.productDetail.returnPolicy },
  ]

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-start justify-between gap-4 pb-8 border-b border-border"
      >
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary font-medium mb-2 tracking-wide"
          >
            {product.series}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-2"
          >
            {product.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            {product.tagline}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-3"
        >
          {product.isNew && (
            <Badge variant="gold" className="shadow-lg">
              <Sparkles className="w-3 h-3 mr-1" />
              {t.common.new}
            </Badge>
          )}
          {product.isFeatured && (
            <Badge variant="secondary" className="shadow-lg">
              <Sparkles className="w-3 h-3 mr-1" />
              {t.common.hot}
            </Badge>
          )}
        </motion.div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column - Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProductGallery images={product.images} productName={product.name} video={product.video} />
        </motion.div>

        {/* Right Column - Info & CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-8"
        >
          {/* Price & CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-2xl bg-card border border-border shadow-xl relative overflow-hidden"
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 gradient-radial-primary opacity-20 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold text-gradient-primary">¥{product.price}</span>
              </div>

              {/* Benefits */}
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span>{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="https://qr.1688.com/s/bhc4cCvS"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  className="w-full gradient-primary text-white h-14 text-lg shadow-lg hover:shadow-blue-lg btn-glow transition-all duration-300"
                  size="lg"
                >
                  {t.productDetail.buyNow}
                </Button>
              </motion.a>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              {t.productDetail.coreFeatures}
            </h2>
            <ProductFeatures features={product.features} />
          </motion.div>
        </motion.div>
      </div>

      {/* Specifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
            <span className="text-primary text-sm">✓</span>
          </span>
          {t.productDetail.specifications}
        </h2>
        <ProductSpecs specifications={product.specifications} />
      </motion.div>

      {/* Detail Images */}
      {product.detailImages && product.detailImages.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Sparkles className="w-7 h-7 text-primary" />
            {t.productDetail.productDetails}
          </h2>
          <ProductDetailImages images={product.detailImages} />
        </motion.div>
      )}
    </div>
  )
}
