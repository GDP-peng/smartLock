"use client"

import { motion } from "framer-motion"
import { getAllProducts } from "@/lib/products"
import { ProductCard } from "@/components/product/ProductCard"
import { Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export default function ProductsPage() {
  const { t } = useLanguage()
  const allProducts = getAllProducts()

  return (
    <div className="pt-20 md:pt-24 pb-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-radial-primary opacity-20 pointer-events-none" />

      {/* Hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-border mb-4 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">精选产品</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            {t.productsPage.title1}<span className="text-gradient-primary-shimmer">{t.productsPage.title2}</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.productsPage.description}
          </p>
        </motion.div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }}
            >
              <ProductCard product={product} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
