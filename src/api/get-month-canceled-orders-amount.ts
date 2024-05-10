import { api } from '@/lib/axios'

export interface GetCanceledMonthOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getCanceledMonthOrdersAmount() {
  const response = await api.get<GetCanceledMonthOrdersAmountResponse>(
    `/metrics/month-canceled-orders-amount`,
  )

  return response.data
}
