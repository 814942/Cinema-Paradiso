import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-zinc-950 text-white shadow-md sticky top-0 z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-wide text-white">
          Cinema Paradiso
        </Link>

        <nav className="flex items-center gap-8 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-red-500 font-medium underline underline-offset-4'
                : 'hover:text-red-400 transition'
            }
          >
            Movies
          </NavLink>

          <NavLink
            to="/tv-show"
            className={({ isActive }) =>
              isActive
                ? 'text-red-500 font-medium underline underline-offset-4'
                : 'hover:text-red-400 transition'
            }
          >
            TV shows
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
