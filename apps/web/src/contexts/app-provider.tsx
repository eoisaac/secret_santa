import type { PropsWithChildren } from 'react'
import { TrpcProvider } from './trpc-provider'

interface AppProviderProps extends PropsWithChildren {}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <TrpcProvider url="http://localhost:3000/trpc" children={children} />
}
