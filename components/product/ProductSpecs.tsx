import type { SpecCategory } from "@/types/product"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProductSpecsProps {
  specifications: SpecCategory[]
}

export function ProductSpecs({ specifications }: ProductSpecsProps) {
  return (
    <div className="space-y-6">
      {specifications.map((category) => (
        <Card key={category.category} className="border-border bg-card">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-primary">
              {category.category}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category.specs.map((spec) => (
                <div
                  key={spec.name}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 py-3 border-b border-border last:border-0"
                >
                  <dt className="text-sm text-muted-foreground font-medium">
                    {spec.name}
                  </dt>
                  <dd className="text-sm text-foreground font-mono">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
