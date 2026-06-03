import { Link } from "react-router-dom"
import Button from "../components/Button"
import Badge from "../components/Badge"

export default function About() {
  return (
    <section className="mx-auto max-w-3xl">
      <div className="mb-6 flex flex-wrap gap-2">
        <Badge variant="amber">Blog</Badge>
        <Badge variant="slate">Dev</Badge>
      </div>

      <h1 className="font-sora mb-6 text-4xl font-bold text-white">
        Sobre o Blog Dev
      </h1>

      <div className="space-y-4 font-inter text-sm leading-relaxed text-text-secondary">
        <p>
        O DevBlog nasceu como projeto pratico da mentoria Do Zero ao Dev Jr, onde alunos aprendem a construir aplicacoes fullstack do absoluto zero ate o deploy.
        </p>
        <p>
        A ideia e simples: cada aluno tem um espaco para escrever sobre o que aprendeu, compartilhar tutoriais e documentar a propria jornada. O blog em si e o resultado do que a gente ensina — frontend moderno, backend tipado, banco de dados real e deploy contınuo.
        </p>
      </div>

      <section className="mx-auto max-w-3xl mt-8">
      <h2 className="font-sora mb-6 text-4xl font-bold text-white">
        Stack 
      </h2>
      <ul>
      <li>React + TypeScript</li>
      <li>TailwindCSS + Shadcn UI</li>
      <li>Python + FastAPI</li>
      <li>Supabase (Postgres, Auth, Storage)</li>
      <li>Deploy em edge</li>
      </ul>
      </section>
    </section>
  )
}
