import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import Button from "./Button"

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `font-inter text-sm font-semibold uppercase tracking-[0.2px] transition-colors ${
    isActive ? "text-cyan" : "text-text-secondary hover:text-white"
  }`

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-bg-dark/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link
          to="/"
          className="font-sora text-lg font-bold text-white"
          onClick={closeMenu}
        >
          Blog Dev
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>

        <ul
          className={`absolute left-0 right-0 top-full flex flex-col gap-4 border-b border-border-subtle bg-bg-dark px-4 py-4 md:static md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 ${
            menuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          <li>
            <NavLink to="/" className={navLinkClass} onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
              Sobre
            </NavLink>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <NavLink
                  to="/dashboard"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <Button
                  variant="secondary"
                  onClick={() => {
                    logout()
                    closeMenu()
                  }}
                >
                  Sair
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/auth/login"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <Link to="/auth/register" onClick={closeMenu}>
                  <Button variant="primary">Cadastrar</Button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}
