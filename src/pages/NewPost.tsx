import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useToast } from "../context/ToastContext"
import Button from "../components/Button"
import Input from "../components/Input"
import Textarea from "../components/Textarea"

export default function NewPost() {
  const { showToast } = useToast()
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    showToast("Post publicado com sucesso!")
    navigate("/dashboard")
  }

  return (
    <section className="mx-auto max-w-2xl">
      <h1 className="font-sora mb-2 text-3xl font-bold text-white">
        Novo post
      </h1>
      <p className="mb-8 font-inter text-sm text-text-secondary">
        Escreva e publique um novo artigo
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 rounded-[var(--radius-card)] bg-bg-card p-6"
      >
        <Input
          label="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título do post"
          required
        />
        <Textarea
          label="Conteúdo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Escreva o conteúdo do post..."
          required
        />
        <Input
          label="Tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="react, javascript, css (separadas por vírgula)"
        />
        <div className="mt-2 flex gap-3">
          <Button type="submit" variant="success">
            Publicar
          </Button>
          <Link to="/dashboard">
            <Button type="button" variant="secondary">
              Cancelar
            </Button>
          </Link>
        </div>
      </form>
    </section>
  )
}
