import { Link } from "react-router-dom"
import { useGetPosts } from "../hook/useGetPost"
import Badge from "../components/Badge"
import Button from "../components/Button"
import { PostGridSkeleton } from "../components/Skeleton"
import { formatDatePt } from "../utils/formatDate"

export default function Dashboard() {
  const { data: posts, isLoading, error } = useGetPosts()

  return (
    <section>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-sora text-3xl font-bold text-white">Meus Posts</h1>
          <p className="mt-1 font-inter text-sm text-text-secondary">
            bem-vindo, Admin DevBlog
          </p>
        </div>
        <Link to="/dashboard/new">
          <Button variant="success">Novo post</Button>
        </Link>
      </div>

      {isLoading && <PostGridSkeleton count={3} />}

      {error && (
        <p className="py-12 text-center font-inter text-text-secondary">
          Erro ao carregar posts. Tente novamente.
        </p>
      )}

      {!isLoading && !error && (!posts || posts.length === 0) && (
        <div className="rounded-[var(--radius-card)] bg-bg-card p-12 text-center">
          <p className="mb-6 font-inter text-text-secondary">
            Nenhum post publicado ainda
          </p>
          <Link to="/dashboard/new">
            <Button variant="primary">Criar primeiro post</Button>
          </Link>
        </div>
      )}

      {!isLoading && posts && posts.length > 0 && (
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col gap-4 rounded-[var(--radius-card)] border border-border-subtle bg-bg-card p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap gap-2">
                  {post.flag.map((tag) => (
                    <Badge key={tag} variant="slate">
                      {tag}
                    </Badge>
                  ))}
                  <Badge variant="green">Publicado</Badge>
                </div>
                <h2 className="font-sora text-lg font-bold text-white">
                  {post.title}
                </h2>
                <time
                  dateTime={post.created_at}
                  className="mt-1 block font-inter text-xs text-coral"
                >
                  {formatDatePt(post.created_at)}
                </time>
              </div>
              <Link to={`/dashboard/edit/${post.id}`}>
                <Button variant="secondary">Editar</Button>
              </Link>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
