interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse-skeleton rounded bg-border-subtle ${className}`}
    />
  )
}

export function PostCardSkeleton() {
  return (
    <article className="rounded-[var(--radius-card)] bg-bg-card p-6">
      <div className="mb-4 flex flex-wrap gap-2">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-5 w-20" />
      </div>
      <Skeleton className="mb-3 h-6 w-3/4" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="mb-4 h-4 w-2/3" />
      <Skeleton className="h-3 w-32" />
    </article>
  )
}

export function PostGridSkeleton({ count}: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_key,i) => (
        <PostCardSkeleton key={i} />
      ))}
    </div>
  )
}
