import { notFound } from "next/navigation"
import { getProductBySlug } from "@/lib/products"
import { ProductGallery } from "@/components/product/ProductGallery"
import { ProductSpecs } from "@/components/product/ProductSpecs"
import { ProductFeatures } from "@/components/product/ProductFeatures"
import { ProductDetailImages } from "@/components/product/ProductDetailImages"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: "产品未找到 - Rebekey 丽贝卡",
    }
  }

  return {
    title: `${product.name} - ${product.series} | Rebekey 丽贝卡`,
    description: product.tagline,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="pt-20 md:pt-24 pb-20">
      {/* Product Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
          <div>
            <p className="text-primary font-medium mb-2">{product.series}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{product.name}</h1>
            <p className="text-muted-foreground text-lg">{product.tagline}</p>
          </div>
          <div className="flex items-center gap-3">
            {product.isNew && <Badge variant="gold">新品</Badge>}
            {product.isFeatured && <Badge variant="secondary">热销</Badge>}
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
                  <span>全国包邮</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Check className="w-5 h-5 text-primary" />
                  <span>全国联保</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Check className="w-5 h-5 text-primary" />
                  <span>7 天无理由退换</span>
                </div>
              </div>

              <Button className="w-full gradient-gold text-black h-12 text-lg" size="lg">
                立即购买
              </Button>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-4">核心功能</h2>
              <ProductFeatures features={product.features} />
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <h2 className="text-3xl font-bold mb-8">产品参数</h2>
        <ProductSpecs specifications={product.specifications} />
      </div>

      {/* Detail Images */}
      {product.detailImages && product.detailImages.length > 0 && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <h2 className="text-3xl font-bold mb-8">产品详情</h2>
          <ProductDetailImages images={product.detailImages} />
        </div>
      )}
    </div>
  )
}
