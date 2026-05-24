import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from '@tanstack/react-router'

import { AppProviders } from '@/app/providers/app-providers'
import { router } from '@/app/router'
import '@/features/i18n/i18n'
import './index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element was not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  </StrictMode>,
)
