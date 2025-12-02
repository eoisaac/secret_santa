import { createTrpcClient, queryClient, trpc } from '@repo/trpc/client'
import { QueryClientProvider } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'

interface TrpcProviderProps extends PropsWithChildren {
  url: string
}

export const TrpcProvider = ({ children, url }: TrpcProviderProps) => {
  const client = createTrpcClient(url)

  return (
    <trpc.Provider client={client} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}
