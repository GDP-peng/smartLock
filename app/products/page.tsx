"use client"

import { getAllProducts } from "@/lib/products"
import { ProductCard } from "@/components/product/ProductCard"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export default function ProductsPage() {
  const { t } = useLanguage()
  const allProducts = getAllProducts()

  return (
    <div className="pt-20 md:pt-24 pb-20">
      {/* Hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t.productsPage.title1}<span className="text-gradient-gold">{t.productsPage.title2}</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            {t.productsPage.description}
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
