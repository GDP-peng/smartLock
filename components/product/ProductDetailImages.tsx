"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface ProductDetailImagesProps {
  images: string[]
}

export function ProductDetailImages({ images }: ProductDetailImagesProps) {
  return (
    <div className="space-y-4">
      {images.map((src, index) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative w-full"
        >
          <Image
            src={src}
            alt={`产品详情 ${index + 1}`}
            width={800}
            height={2000}
            className="w-full h-auto"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  )
}
