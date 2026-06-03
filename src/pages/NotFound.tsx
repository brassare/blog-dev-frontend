import { Link } from "react-router-dom"
import Button from "../components/Button"

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-6xl font-bold text-cyan">404</p>
      <h1 className="font-sora mt-4 text-3xl font-bold text-white">
        Página não encontrada
      </h1>
      <p className="mt-2 max-w-md font-inter text-sm text-text-secondary">
        A página que você procura não existe ou foi removida.
      </p>
      <Link to="/" className="mt-8">
        <Button variant="primary">Voltar para Home</Button>
      </Link>
    </section>
  )
}
