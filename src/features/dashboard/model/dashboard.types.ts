export interface DashboardMetric {
  labelKey: 'stats.components' | 'stats.coverage' | 'stats.routes'
  value: string
}

export interface DashboardTrendPoint {
  month: string
  quality: number
}

export interface DashboardSummary {
  metrics: DashboardMetric[]
  trend: DashboardTrendPoint[]
}
