import { HeroSection } from "@/components/home/HeroSection"
import { FeaturedProducts } from "@/components/home/FeaturedProducts"
import { TechnologyHighlights } from "@/components/home/TechnologyHighlights"
import { BrandPhilosophy } from "@/components/home/BrandPhilosophy"
import { getFeaturedProducts } from "@/lib/products"

export const metadata = {
  title: "Rebekey 丽贝卡 - 智能锁十大品牌 | 3D 人脸识别智能门锁",
  description: "丽贝卡智能锁，专注于智能门锁研发与制造，3D 人脸识别、掌静脉解锁、AI 智能语音，为您的家庭提供全方位的安全守护。",
  keywords: ["智能锁", "智能门锁", "人脸识别锁", "丽贝卡", "Rebekey", "智能家居", "安全锁"],
};

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <>
      <HeroSection />
      <FeaturedProducts products={featuredProducts} />
      <TechnologyHighlights />
      <BrandPhilosophy />
    </>
  )
}
