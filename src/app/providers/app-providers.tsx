import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from 'next-themes'
import { useState, type PropsWithChildren } from 'react'

import { createQueryClient } from '@/app/providers/query-client'

export function AppProviders({ children }: PropsWithChildren) {
  const [queryClient] = useState(createQueryClient)

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        {children}
        {import.meta.env.DEV ? (
          <ReactQueryDevtools
            buttonPosition="bottom-left"
            initialIsOpen={false}
          />
        ) : null}
      </QueryClientProvider>
    </ThemeProvider>
  )
}
