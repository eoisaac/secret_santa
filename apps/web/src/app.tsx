import { AppLayout } from '@/components/layouts/app-layout'
import { RootLayout } from '@/components/layouts/root-layout'
import { AppProvider } from '@/contexts/app-provider'
import { HomePage } from '@/pages/home-page'
import '@/styles/globals.css'

export const App = () => {
  return (
    <AppProvider>
      <RootLayout>
        <AppLayout>
          <HomePage />
        </AppLayout>
      </RootLayout>
    </AppProvider>
  )
}
