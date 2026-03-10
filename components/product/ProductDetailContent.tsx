"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProductGallery } from "@/components/product/ProductGallery"
import { ProductFeatures } from "@/components/product/ProductFeatures"
import { ProductSpecs } from "@/components/product/ProductSpecs"
import { ProductDetailImages } from "@/components/product/ProductDetailImages"
import { Check } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import type { Product } from "@/types/product"

interface ProductDetailContentProps {
  product: Product
}

export function ProductDetailContent({ product }: ProductDetailContentProps) {
  const { t } = useLanguage()

  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
        <div>
          <p className="text-primary font-medium mb-2">{product.series}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{product.name}</h1>
          <p className="text-muted-foreground text-lg">{product.tagline}</p>
        </div>
        <div className="flex items-center gap-3">
          {product.isNew && <Badge variant="gold">{t.common.new}</Badge>}
          {product.isFeatured && <Badge variant="secondary">{t.common.hot}</Badge>}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column - Gallery (includes video if available) */}
        <div>
          <ProductGallery images={product.images} productName={product.name} video={product.video} />
        </div>

        {/* Right Column - Info & CTA */}
        <div className="space-y-8">
          {/* Price & CTA */}
          <div className="p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-bold text-gradient-gold">¥{product.price}</span>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <Check className="w-5 h-5 text-primary" />
                <span>{t.productDetail.freeShipping}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Check className="w-5 h-5 text-primary" />
                <span>{t.productDetail.warranty}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Check className="w-5 h-5 text-primary" />
                <span>{t.productDetail.returnPolicy}</span>
              </div>
            </div>

            <Button className="w-full gradient-gold text-black h-12 text-lg" size="lg">
              {t.productDetail.buyNow}
            </Button>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-bold mb-4">{t.productDetail.coreFeatures}</h2>
            <ProductFeatures features={product.features} />
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <h2 className="text-3xl font-bold mb-8">{t.productDetail.specifications}</h2>
        <ProductSpecs specifications={product.specifications} />
      </div>

      {/* Detail Images */}
      {product.detailImages && product.detailImages.length > 0 && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <h2 className="text-3xl font-bold mb-8">{t.productDetail.productDetails}</h2>
          <ProductDetailImages images={product.detailImages} />
        </div>
      )}
    </>
  )
}
