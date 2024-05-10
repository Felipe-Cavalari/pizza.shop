import { api } from '@/lib/axios'

export interface GetDailyRevenueInPeriod {
  from: Date | undefined
  to: Date | undefined
}

export type GetDailyRevenueInPeriodResponse = {
  date: string
  receipt: number
}[]

export async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriod) {
  const response = await api.get<GetDailyRevenueInPeriodResponse>(
    `/metrics/daily-receipt-in-period`,
    {
      params: {
        from,
        to,
      },
    },
  )

  return response.data
}
