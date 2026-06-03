import {  useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useToast } from "../context/ToastContext"
import Button from "../components/Button"
import Input from "../components/Input"

export default function Login() {
  const { login } = useAuth()
  const { showToast } = useToast()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (login(email, password)) {
      showToast("Login realizado com sucesso!")
      navigate("/dashboard")
    } else {
      showToast("E-mail ou senha inválidos.", "error")
    }
  }

  return (
    <section className="mx-auto max-w-md">
      <h1 className="font-sora mb-2 text-3xl font-bold text-white">Login</h1>
      <p className="mb-8 font-inter text-sm text-text-secondary">
        Acesse seu painel do DevBlog
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          label="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          required
        />
        <Input
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          minLength={6}
        />
        <Button type="submit" variant="primary" className="mt-2 w-full">
          Entrar
        </Button>
      </form>

      <p className="mt-6 text-center font-inter text-sm text-text-secondary">
        Ainda não tem conta?{" "}
        <Link to="/auth/register" className="text-cyan hover:opacity-90">
          Cadastre-se
        </Link>
      </p>
    </section>
  )
}
