import { Link } from "react-router-dom"
import Badge from "./Badge"
import type { Post } from "../types/post"
import { formatDatePt } from "../utils/formatDate"

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="flex flex-col rounded-[var(--radius-card)] bg-bg-card p-6 transition-opacity hover:opacity-95">
      <div className="mb-3 flex flex-wrap gap-2">
        {post.flag.map((tag) => (
          <Badge key={tag} variant="amber">
            {tag}
          </Badge>
        ))}
      </div>

      <Link to={`/post/${post.id}`} className="group flex flex-1 flex-col">
        <h2 className="font-sora mb-2 text-xl font-bold text-white group-hover:text-cyan">
          {post.title}
        </h2>
        <p className="mb-4 line-clamp-3 flex-1 font-inter text-sm font-normal text-text-secondary">
          {post.content}
        </p>
      </Link>

      <time
        dateTime={post.created_at}
        className="font-inter text-xs font-normal text-coral"
      >
        {formatDatePt(post.created_at)}
      </time>
    </article>
  )
}
