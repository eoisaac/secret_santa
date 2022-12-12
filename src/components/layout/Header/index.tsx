import { useEffect, useState } from 'react'
import { Logo } from '../Logo'

export const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    window.onscroll = () => setIsScrolling(window.pageYOffset > 0)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 z-30 bg-violet-100 ${
        isScrolling && 'shadow-sm'
      }`}
    >
      <div
        className="mx-auto flex w-full max-w-5xl items-center justify-between
      p-4"
      >
        <Logo />

        <nav className="flex items-center gap-4">
          <ul className="flex items-center gap-4 font-medium">
            <li>
              <a href="#home">Home</a>
            </li>
            {/* <li>
              <a href="#about">About</a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  )
}
