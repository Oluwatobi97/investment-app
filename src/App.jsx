import React from 'react'
import { MarkertingRoutes, AppRoute } from './routes/AllRoutes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CookieBanner from './lib/CookieBanner'

function App () {
  const queryClient = new QueryClient()
  return (
    <div className='bg-gray-50'>
      <QueryClientProvider client={queryClient}>
        <MarkertingRoutes />
        <AppRoute />
        <CookieBanner />
      </QueryClientProvider>
    </div>
  )
}

export default App
