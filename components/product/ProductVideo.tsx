"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductVideoProps {
  video?: string
  productName: string
}

export function ProductVideo({ video, productName }: ProductVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  if (!video) {
    return null
  }

  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/50 to-secondary border border-border">
      {!isPlaying ? (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Thumbnail Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full gradient-gold/20 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">{productName.charAt(0)}</span>
            </div>
          </div>

          {/* Play Button */}
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="w-20 h-20 rounded-full gradient-gold text-black hover:opacity-90"
              onClick={() => setIsPlaying(true)}
            >
              <Play className="w-8 h-8 ml-1" />
            </Button>
          </motion.div>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-black">
          <video
            className="w-full h-full object-contain"
            src={video}
            autoPlay
            controls
            loop
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  )
}
