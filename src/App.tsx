import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { Creation } from './pages/Creation'
import { Home } from './pages/Home'
import './styles/main.css'

export const App = () => {
  return (
    <div
      className="flex min-h-screen max-w-[100vw] flex-col overflow-y-auto
    overflow-x-hidden"
    >
      <Header />
      <main className="mx-auto flex min-h-0 w-full max-w-5xl flex-1 flex-col">
        <Home />
        <Creation />
      </main>
      <Footer />
    </div>
  )
}
