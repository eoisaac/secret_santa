import { Logo } from '../Logo'

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between p-4">
      <Logo />

      <nav className="flex items-center gap-4">
        <ul className="flex items-center gap-4">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
