import { getAllProducts } from "@/lib/products"
import { ProductCard } from "@/components/product/ProductCard"

export const metadata = {
  title: "产品中心 - Rebekey 丽贝卡",
  description: "探索丽贝卡智能锁系列产品，包括 AI 智能系列和经典系列，3D 人脸识别、掌静脉解锁等多种智能锁款式。",
}

export default function ProductsPage() {
  const allProducts = getAllProducts()

  return (
    <div className="pt-20 md:pt-24 pb-20">
      {/* Hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            我们的<span className="text-gradient-gold">产品</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            探索丽贝卡智能锁全系列，从 AI 智能系列到经典系列，
            <br />
            为您的家庭提供全方位的安全守护。
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
