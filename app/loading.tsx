export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
    <section className="flex">
      <nav className="hidden md:flex flex-col w-20 min-h-screen border-r border-zinc-800">
        <div className="space-y-8 p-4 mt-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-12 w-12 rounded-2xl bg-zinc-800 shimmer"
            />
          ))}
        </div>
      </nav>
  
      <section className="flex-1 p-8">
        <section className="grid md:grid-cols-4 gap-4">
  
          <article className="md:col-span-2 rounded-3xl bg-zinc-900 p-8">
            <div className="h-48 rounded-2xl bg-zinc-800 shimmer" />
          </article>
  
          <article className="md:col-span-2 rounded-3xl bg-zinc-900 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded bg-zinc-800 shimmer" />
              <div className="h-8 w-72 rounded bg-zinc-800 shimmer" />
            </div>
  
            <div className="h-3 w-full rounded-full bg-zinc-800 overflow-hidden mb-6">
              <div className="h-full w-3/4 shimmer" />
            </div>
  
            <div className="space-y-3">
              <div className="h-4 w-full rounded bg-zinc-800 shimmer" />
              <div className="h-4 w-5/6 rounded bg-zinc-800 shimmer" />
            </div>
          </article>
          
          <article className="md:col-span-2 rounded-3xl bg-zinc-900 p-6">
            <div className="h-6 w-40 rounded bg-zinc-800 shimmer mb-8" />
  
            <div className="grid grid-cols-14 gap-2">
              {Array.from({ length: 56 }).map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-4 rounded bg-zinc-800 shimmer"
                />
              ))}
            </div>
          </article>
  
          {Array.from({ length: 2 }).map((_, i) => (
            <article
              key={i}
              className="rounded-2xl bg-zinc-900 p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-5 w-5 rounded bg-zinc-800 shimmer" />
                <div className="h-5 w-40 rounded bg-zinc-800 shimmer" />
              </div>
  
              <div className="h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
                <div className="h-full w-2/3 shimmer" />
              </div>
  
              <div className="h-4 w-24 rounded bg-zinc-800 shimmer mt-4" />
            </article>
          ))}
        </section>
      </section>
    </section>
  </main>
  );
}
