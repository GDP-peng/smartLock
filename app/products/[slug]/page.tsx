import { notFound } from "next/navigation"
import { getProductBySlug } from "@/lib/products"
import { ProductDetailContent } from "@/components/product/ProductDetailContent"

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
      title: "Product Not Found - Rebekey",
    }
  }

  return {
    title: `${product.name} - ${product.series} | Rebekey`,
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <ProductDetailContent product={product} />
      </div>
    </div>
  )
}
