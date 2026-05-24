import { createFileRoute } from '@tanstack/react-router'

import { dashboardSummaryQueryOptions } from '@/features/dashboard/api/dashboard.queries'
import { DashboardPage } from '@/features/dashboard/components/dashboard-page'
import type { DashboardSummary } from '@/features/dashboard/model/dashboard.types'

export const Route = createFileRoute('/')({
  component: DashboardPage,
  loader: ({ context }): Promise<DashboardSummary> =>
    context.queryClient.ensureQueryData(dashboardSummaryQueryOptions()),
})
