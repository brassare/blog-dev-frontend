import { Link, useParams } from "react-router-dom"
import { useGetPostById } from "../hook/useGetPost"
import Badge from "../components/Badge"
import Button from "../components/Button"
import { PostCardSkeleton } from "../components/Skeleton"
import { formatDatePt } from "../utils/formatDate"

export default function PostDetail() {
  const { id } = useParams<{ id: string }>()
  const { data: post, isLoading, error } = useGetPostById(id ?? "")

  if (isLoading) {
    return (
      <div className="mx-auto max-w-3xl">
        <PostCardSkeleton />
      </div>
    )
  }

  if (error || !post) {
    return (
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <p className="mb-6 font-inter text-text-secondary">
          Erro ao carregar posts. Tente novamente.
        </p>
        <Link to="/">
          <Button variant="secondary">Voltar para Home</Button>
        </Link>
      </section>
    )
  }

  return (
    <article className="mx-auto max-w-3xl rounded-[var(--radius-card)] bg-bg-card p-6 md:p-8">
      <div className="mb-4 flex flex-wrap gap-2">
        {post.flag.map((tag) => (
          <Badge key={tag} variant="amber">
            {tag}
          </Badge>
        ))}
        <Badge variant="green">Publicado</Badge>
      </div>

      <h1 className="font-sora mb-4 text-3xl font-bold text-white md:text-4xl">
        {post.title}
      </h1>

      <time
        dateTime={post.created_at}
        className="mb-6 block font-inter text-xs text-coral"
      >
        {formatDatePt(post.created_at)}
      </time>

      <div className="prose prose-invert max-w-none">
        <p className="whitespace-pre-wrap font-inter text-sm leading-relaxed text-text-secondary">
          {post.content}
        </p>
      </div>

      <div className="mt-8 border-t border-border-subtle pt-6">
        <Link to="/">
          <Button variant="secondary">Voltar para Home</Button>
        </Link>
      </div>
    </article>
  )
}
