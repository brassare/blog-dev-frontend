import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 md:px-6">
        <Outlet />
      </main>
      <footer className="border-t border-border-subtle py-6 text-center font-inter text-xs text-text-secondary">
        © {new Date().getFullYear()} Blog Dev
      </footer>
    </div>
  )
}
