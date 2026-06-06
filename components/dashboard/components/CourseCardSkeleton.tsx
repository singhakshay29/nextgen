export default function CourseCardSkeleton({
    featured = false,
  }: {
    featured?: boolean;
  }) {
    return (
      <article
        className={`
          rounded-2xl bg-zinc-900 p-5
          ${featured ? "md:col-span-2 md:row-span-2" : ""}
        `}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-6 w-6 rounded bg-zinc-800 shimmer" />
          <div
            className={`
              h-6 rounded bg-zinc-800 shimmer
              ${featured ? "w-64" : "w-40"}
            `}
          />
        </div>
  
        <div className="h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
          <div className="h-full w-3/4 shimmer" />
        </div>
  
        <div
          className={`
            mt-4 rounded bg-zinc-800 shimmer
            ${featured ? "h-4 w-full" : "h-4 w-24"}
          `}
        />
  
        {featured && (
          <div className="space-y-2 mt-4">
            <div className="h-4 w-full rounded bg-zinc-800 shimmer" />
            <div className="h-4 w-5/6 rounded bg-zinc-800 shimmer" />
          </div>
        )}
      </article>
    );
  }