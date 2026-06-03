import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useGetPostById } from "../hook/useGetPost"
import { useToast } from "../context/ToastContext"
import Button from "../components/Button"
import Input from "../components/Input"
import Textarea from "../components/Textarea"
import { PostCardSkeleton } from "../components/Skeleton"

export default function EditPost() {
  const { id } = useParams<{ id: string }>()
  const { data: post, isLoading, error } = useGetPostById(id ?? "")
  const { showToast } = useToast()
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState("")

  useEffect(() => {
    if (post) {
      setTitle(post.title)
      setContent(post.content)
      setTags(post.flag.join(", "))
    }
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault()
    showToast("Post atualizado com sucesso!")
    navigate("/dashboard")
  }

  if (isLoading) {
    return (
      <div className="mx-auto max-w-2xl">
        <PostCardSkeleton />
      </div>
    )
  }

  if (error || !post) {
    return (
      <section className="flex flex-col items-center py-20 text-center">
        <p className="mb-6 font-inter text-text-secondary">
          Erro ao carregar posts. Tente novamente.
        </p>
        <Link to="/dashboard">
          <Button variant="secondary">Voltar ao Dashboard</Button>
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-2xl">
      <h1 className="font-sora mb-2 text-3xl font-bold text-white">
        Editar post
      </h1>
      <p className="mb-8 font-inter text-sm text-text-secondary">
        Atualize o conteúdo do artigo
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 rounded-[var(--radius-card)] bg-bg-card p-6"
      >
        <Input
          label="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Textarea
          label="Conteúdo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <Input
          label="Tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="react, javascript, css"
        />
        <div className="mt-2 flex gap-3">
          <Button type="submit" variant="success">
            Salvar
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
