"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, ZoomIn, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductGalleryProps {
  images: string[]
  productName: string
  video?: string
}

type MediaType = "image" | "video"

interface MediaItem {
  type: MediaType
  src: string
  thumbnail?: string
}

export function ProductGallery({ images, productName, video }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // 构建媒体列表：图片 + 视频（如果有）
  const mediaItems: MediaItem[] = [
    ...images.map((img) => ({ type: "image" as MediaType, src: img })),
    ...(video ? [{ type: "video" as MediaType, src: video, thumbnail: images[0] }] : []),
  ]

  const selectedItem = mediaItems[selectedIndex]

  const nextMedia = () => {
    setSelectedIndex((prev) => (prev + 1) % mediaItems.length)
    setIsPlaying(false)
  }

  const prevMedia = () => {
    setSelectedIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)
    setIsPlaying(false)
  }

  return (
    <>
      <div className="space-y-4">
        {/* Main Media Display */}
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary border border-border">
          {selectedItem?.type === "video" ? (
            <>
              {!isPlaying ? (
                <>
                  {/* Video Thumbnail */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full gradient-gold/20 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">{productName.charAt(0)}</span>
                    </div>
                  </div>
                  {/* Play Button */}
                  <motion.button
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(true)}
                    className="relative z-10 w-20 h-20 rounded-full gradient-gold text-black hover:opacity-90 flex items-center justify-center cursor-pointer border-none"
                    type="button"
                    aria-label="播放视频"
                  >
                    <Play className="w-8 h-8 ml-1" />
                  </motion.button>
                </>
              ) : (
                <div className="w-full h-full bg-black">
                  <video
                    className="w-full h-full object-contain"
                    src={selectedItem.src}
                    autoPlay
                    controls
                    playsInline
                    onEnded={() => setIsPlaying(false)}
                  />
                </div>
              )}
            </>
          ) : (
            <>
              <Image
                src={selectedItem.src}
                alt={`${productName}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Zoom Button */}
              <Button
                size="icon"
                variant="secondary"
                className="absolute bottom-4 right-4"
                onClick={() => setIsLightboxOpen(true)}
              >
                <ZoomIn className="w-5 h-5" />
              </Button>
            </>
          )}

          {/* Navigation Arrows */}
          {mediaItems.length > 1 && (
            <>
              <Button
                size="icon"
                variant="secondary"
                className="absolute left-4 top-1/2 -translate-y-1/2"
                onClick={prevMedia}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="absolute right-4 top-1/2 -translate-y-1/2"
                onClick={nextMedia}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </>
          )}

          {/* Media Counter */}
          {mediaItems.length > 1 && (
            <div className="absolute top-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
              {selectedIndex + 1} / {mediaItems.length}
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {mediaItems.length > 1 && (
          <div className="flex gap-3 overflow-x-auto">
            {mediaItems.map((item, index) => (
              <button
                key={`${item.type}-${index}`}
                onClick={() => {
                  setSelectedIndex(index)
                  setIsPlaying(false)
                }}
                className={cn(
                  "relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors",
                  index === selectedIndex
                    ? "border-primary"
                    : "border-border hover:border-muted-foreground"
                )}
              >
                {item.type === "video" ? (
                  <div className="relative w-full h-full gradient-gold/20 flex items-center justify-center">
                    <Play className="w-8 h-8 text-primary" />
                    <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 rounded">
                      视频
                    </span>
                  </div>
                ) : (
                  <Image
                    src={item.src}
                    alt={`${productName} ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox - 仅支持图片 */}
      <AnimatePresence>
        {isLightboxOpen && selectedItem?.type === "image" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X className="w-6 h-6" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="absolute left-4 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation()
                prevMedia()
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="absolute right-4 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation()
                nextMedia()
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            <div
              className="max-w-4xl max-h-[80vh] w-full aspect-square rounded-lg overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedItem.src}
                alt={productName}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
