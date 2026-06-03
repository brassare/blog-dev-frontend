import { useGetPosts } from "../hook/useGetPost"
import PostCard from "../components/PostCard"
import { PostGridSkeleton } from "../components/Skeleton"
import Button from "../components/Button"

export default function Home() {
  const { data: posts, isLoading, error, refetch } = useGetPosts()

  if (isLoading) {
    return (
      <section>
        <h1 className="font-sora mb-8 text-3xl font-bold text-white">
          Posts Recentes
        </h1>
        <PostGridSkeleton />
      </section>
    )
  }

  if (error) {
    return (
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <p className="mb-6 font-inter text-text-secondary">
          Erro ao carregar posts. Tente novamente.
        </p>
        <Button variant="primary" onClick={() => refetch()}>
          Tentar novamente
        </Button>
      </section>
    )
  }

  if (!posts || posts.length === 0) {
    return (
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="font-sora mb-4 text-3xl font-bold text-white">
          Posts Recentes
        </h1>
        <p className="font-inter text-text-secondary">
          Nenhum post publicado ainda
        </p>
      </section>
    )
  }

  return (
    <section>
      <h1 className="font-sora mb-8 text-3xl font-bold text-white">
        Posts Recentes
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
