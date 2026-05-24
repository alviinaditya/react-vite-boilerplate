import { createRouter } from '@tanstack/react-router'

import { createQueryClient } from '@/app/providers/query-client'
import { routeTree } from '@/route-tree.gen'

export interface RouterContext {
  queryClient: ReturnType<typeof createQueryClient>
}

const queryClient = createQueryClient()
const routerContext = {
  queryClient,
} satisfies RouterContext

export const router = createRouter({
  context: routerContext,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 1000 * 30,
  routeTree,
  scrollRestoration: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
