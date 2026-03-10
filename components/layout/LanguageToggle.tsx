"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { cn } from "@/lib/utils"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="relative overflow-hidden"
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4 mr-2" />
      <span className={cn(
        "text-xs font-medium transition-all",
        language === 'zh' ? "w-6" : "w-8"
      )}>
        {language === 'zh' ? '中文' : 'EN'}
      </span>
    </Button>
  )
}
