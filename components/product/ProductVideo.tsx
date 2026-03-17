"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductVideoProps {
  video?: string
  productName: string
}

export function ProductVideo({ video, productName }: ProductVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  if (!video) {
    return null
  }

  const handlePlay = () => {
    setIsPlaying(true)
    // 视频加载完成后自动播放
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch((err) => {
        console.error("Video play error:", err)
      })
    }
  }

  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-accent/50 to-accent border border-border">
      {!isPlaying ? (
        <>
          {/* Thumbnail Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">{productName.charAt(0)}</span>
            </div>
          </div>

          {/* Play Button */}
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePlay}
            className="relative z-10 w-20 h-20 rounded-full gradient-primary text-white hover:opacity-90 flex items-center justify-center cursor-pointer border-none shadow-lg"
            type="button"
            aria-label="播放视频"
          >
            <Play className="w-8 h-8 ml-1" />
          </motion.button>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-black">
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            controls
            autoPlay
            playsInline
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  )
}
