import { describe, expect, it } from 'vitest'

import { dashboardSummaryQueryOptions } from '@/features/dashboard/api/dashboard.queries'

describe('dashboardSummaryQueryOptions', () => {
  it('uses a stable hierarchical query key', () => {
    expect(dashboardSummaryQueryOptions().queryKey).toEqual([
      'dashboard',
      'summary',
    ])
  })
})
