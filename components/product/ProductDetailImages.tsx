"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface ProductDetailImagesProps {
  images: string[]
}

export function ProductDetailImages({ images }: ProductDetailImagesProps) {
  return (
    <div className="space-y-8">
      {images.map((src, index) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative w-full flex justify-center"
        >
          {/* 淘宝详情图：手机全宽，平板/电脑限制最大宽度居中显示 */}
          <div className="w-full max-w-[750px]">
            <Image
              src={src}
              alt={`产品详情 ${index + 1}`}
              width={750}
              height={2000}
              className="w-full h-auto"
              loading="lazy"
              priority={index < 3}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
