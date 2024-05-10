import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthRevenue } from '@/api/get-month-revenue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metric-card-skeleton'

export function MonthRevenueCard() {
  const { data: monthReceipt } = useQuery({
    queryKey: ['metrics', 'month-receipt'],
    queryFn: getMonthRevenue,
  })
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base font-semibold">
          Receita total (mês){' '}
        </CardTitle>
        <DollarSign className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthReceipt ? (
          <>
            <span className="text-2xl font-bold tracking-tighter">
              {monthReceipt.receipt}
            </span>
            <p className="text-sx text-muted-foreground">
              {monthReceipt.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-rose-500">
                    {monthReceipt.diffFromLastMonth}
                  </span>{' '}
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-emerald-500">
                    {monthReceipt.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </>
              )}
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
