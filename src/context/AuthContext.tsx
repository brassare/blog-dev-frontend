import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react"

interface AuthContextValue {
  isAuthenticated: boolean
  login: (email: string, password: string) => boolean
  register: (email: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

const AUTH_KEY = "blog-dev-auth"

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem(AUTH_KEY) === "true"
  )

  const login = (email: string, password: string) => {
    if (email && password.length >= 6) {
      localStorage.setItem(AUTH_KEY, "true")
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  const register = (email: string, password: string) => {
    if (email && password.length >= 6) {
      localStorage.setItem(AUTH_KEY, "true")
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem(AUTH_KEY)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
