"use client"

import { motion } from "framer-motion"
import type { SpecCategory } from "@/types/product"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface ProductSpecsProps {
  specifications: SpecCategory[]
}

export function ProductSpecs({ specifications }: ProductSpecsProps) {
  return (
    <div className="space-y-6">
      {specifications.map((category, categoryIndex) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
        >
          <Card className="border-border bg-card overflow-hidden">
            <CardHeader className="pb-4 bg-accent/50 border-b border-border">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg font-semibold text-primary">
                  {category.category}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {category.specs.map((spec, specIndex) => (
                  <motion.div
                    key={spec.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + specIndex * 0.05 }}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 py-2 border-b border-border last:border-0 hover:bg-accent/50 rounded px-2 -mx-2 transition-colors duration-200"
                  >
                    <dt className="text-sm text-muted-foreground font-medium">
                      {spec.name}
                    </dt>
                    <dd className="text-sm text-foreground font-mono text-primary">
                      {spec.value}
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
