import { useSuspenseQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { Separator } from '@/components/ui/separator'
import { dashboardSummaryQueryOptions } from '@/features/dashboard/api/dashboard.queries'
import { LanguageSwitcher } from '@/features/i18n/language-switcher'
import { ThemeSwitcher } from '@/features/theme/theme-switcher'

const chartConfig = {
  quality: {
    color: 'var(--chart-2)',
    label: 'Quality',
  },
} satisfies ChartConfig

export function DashboardPage() {
  const { data } = useSuspenseQuery(dashboardSummaryQueryOptions())
  const { t } = useTranslation('dashboard')

  return (
    <main className="bg-background text-foreground min-h-svh">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-4">
          <Badge variant="secondary">{t('badge')}</Badge>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="flex flex-col gap-5">
            <div className="flex max-w-3xl flex-col gap-4">
              <h1 className="text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
                {t('title')}
              </h1>
              <p className="text-muted-foreground max-w-2xl text-base leading-7">
                {t('description')}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {data.metrics.map((metric) => (
                <Card key={metric.labelKey}>
                  <CardHeader>
                    <CardDescription>{t(metric.labelKey)}</CardDescription>
                    <CardTitle className="text-3xl">{metric.value}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Quality trend</CardTitle>
              <CardDescription>
                TanStack Query + Recharts sample
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Separator />
              <ChartContainer className="min-h-64" config={chartConfig}>
                <BarChart accessibilityLayer data={data.trend}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    axisLine={false}
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                  />
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                    cursor={false}
                  />
                  <Bar
                    dataKey="quality"
                    fill="var(--color-quality)"
                    radius={6}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
