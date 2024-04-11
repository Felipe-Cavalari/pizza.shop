import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base font-semibold">
          Pedidos (mês){' '}
        </CardTitle>
        <Utensils className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tighter">246 Pedidos</span>
        <p className="text-sx text-muted-foreground">
          <span className="text-primary">+6%</span> em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
