import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthRevenueCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base font-semibold">
          Receita total (mês){' '}
        </CardTitle>
        <DollarSign className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tighter">R$ 1248,00</span>
        <p className="text-sx text-muted-foreground">
          <span className="text-primary">+2%</span> em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
