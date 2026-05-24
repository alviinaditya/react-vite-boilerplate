import { queryOptions } from '@tanstack/react-query'

import type { DashboardSummary } from '@/features/dashboard/model/dashboard.types'

const dashboardSummary: DashboardSummary = {
  metrics: [
    { labelKey: 'stats.routes', value: '100%' },
    { labelKey: 'stats.components', value: '6' },
    { labelKey: 'stats.coverage', value: '3' },
  ],
  trend: [
    { month: 'Jan', quality: 62 },
    { month: 'Feb', quality: 69 },
    { month: 'Mar', quality: 78 },
    { month: 'Apr', quality: 86 },
    { month: 'May', quality: 94 },
  ],
}

export function dashboardSummaryQueryOptions() {
  return queryOptions({
    queryFn: async ({ signal }) => {
      await new Promise((resolve, reject) => {
        const timeoutId = window.setTimeout(resolve, 150)

        signal.addEventListener('abort', () => {
          window.clearTimeout(timeoutId)
          reject(new DOMException('Query aborted', 'AbortError'))
        })
      })

      return dashboardSummary
    },
    queryKey: ['dashboard', 'summary'],
    staleTime: 1000 * 60 * 5,
  })
}
