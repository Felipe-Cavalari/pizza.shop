import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { data: '10/12', revenue: 1200 },
  { data: '11/12', revenue: 800 },
  { data: '12/12', revenue: 900 },
  { data: '13/12', revenue: 400 },
  { data: '14/12', revenue: 2300 },
  { data: '15/12', revenue: 800 },
  { data: '16/12', revenue: 640 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diaria do período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart style={{ fontSize: 12 }} data={data}>
            <CartesianGrid className="text-muted" vertical={false} />
            <XAxis dataKey={'data'} tickLine={false} axisLine={false} dy={16} />
            <YAxis
              width={80}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.emerald[500]}
            />
            <Tooltip contentStyle={{ color: 'black' }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
