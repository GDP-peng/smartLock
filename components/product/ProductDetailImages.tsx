"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface ProductDetailImagesProps {
  images: string[]
}

export function ProductDetailImages({ images }: ProductDetailImagesProps) {
  return (
    <div className="space-y-0">
      {images.map((src, index) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3 }}
          className="relative w-full flex justify-center bg-background"
        >
          {/* 淘宝详情图：手机全宽，平板/电脑限制最大宽度居中显示 */}
          <div className="w-full max-w-[750px] bg-background">
            <Image
              src={src}
              alt={`产品详情 ${index + 1}`}
              width={750}
              height={2000}
              className="w-full h-auto block"
              loading={index < 6 ? "eager" : "lazy"}
              priority={index < 2}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
