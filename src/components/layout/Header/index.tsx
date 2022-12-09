import { NavLink } from 'react-router-dom'
import { Logo } from '../Logo'

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between p-4">
      <Logo />

      <nav className="flex items-center gap-4">
        <ul className="flex items-center gap-4">
          <li>
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            <NavLink to="">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
