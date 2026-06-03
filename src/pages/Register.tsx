import {  useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useToast } from "../context/ToastContext"
import Button from "../components/Button"
import Input from "../components/Input"

export default function Register() {
  const { register } = useAuth()
  const { showToast } = useToast()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      showToast("As senhas não coincidem.", "error")
      return
    }
    if (register(email, password)) {
      showToast("Conta criada com sucesso!")
      navigate("/dashboard")
    } else {
      showToast("Não foi possível criar a conta.", "error")
    }
  }

  return (
    <section className="mx-auto max-w-md">
      <h1 className="font-sora mb-2 text-3xl font-bold text-white">Criar conta</h1>
      <p className="mb-8 font-inter text-sm text-text-secondary">
        Comece a publicar no Devblog
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
        <Input
          label="Confirmar senha"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="••••••••"
          required
          minLength={6}
        />
        <Button type="submit" variant="primary" className="mt-2 w-full">
          Criar conta
        </Button>
      </form>

      <p className="mt-6 text-center font-inter text-sm text-text-secondary">
        Já tem conta?{" "}
        <Link to="/auth/login" className="text-cyan hover:opacity-90">
          Faça login
        </Link>
      </p>
    </section>
  )
}
