import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getCanceledMonthOrdersAmount } from '@/api/get-month-canceled-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metric-card-skeleton'

export function MonthCanceledOrdersAmountCard() {
  const { data: canceledMonthOrdersAmount } = useQuery({
    queryKey: ['metrics', 'month-canceled-orders-amount'],
    queryFn: getCanceledMonthOrdersAmount,
  })
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês){' '}
        </CardTitle>
        <DollarSign className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {canceledMonthOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tighter">
              {canceledMonthOrdersAmount.amount}
            </span>
            <p className="text-sx text-muted-foreground">
              {canceledMonthOrdersAmount.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-rose-500">
                    {canceledMonthOrdersAmount.diffFromLastMonth}
                  </span>{' '}
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-emerald-500">
                    {canceledMonthOrdersAmount.diffFromLastMonth}%
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
