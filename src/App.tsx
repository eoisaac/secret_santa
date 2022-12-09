import { Header } from './components/layout/Header'
import { Home } from './pages/Home'
import './styles/main.css'

export const App = () => {
  return (
    <div className="flex min-h-screen max-w-[100vw] flex-col overflow-y-auto">
      <main
        className="my-0 mx-auto flex min-h-0 w-full max-w-5xl flex-1
      flex-col"
      >
        <Header />
        <Home />
      </main>
    </div>
  )
}
