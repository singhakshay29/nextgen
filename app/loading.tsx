export default function Loading() {
  return (
    <main className='min-h-screen bg-zinc-950 text-white'>
      <section className='flex'>
        <nav className='hidden md:flex flex-col w-20 min-h-screen border-r border-zinc-800'>
          <div className='space-y-8 p-4 mt-4'>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className='h-6 w-6 rounded bg-zinc-800 animate-pulse'
              />
            ))}
          </div>
        </nav>

        <section className='flex-1 p-8'>
          <section className='grid gap-4 '>
            <article className='col-span-2 rounded-3xl bg-zinc-900 p-8'>
              <div className='h-full min-h-[250px] rounded-2xl bg-zinc-800 ' />
            </article>

            {Array.from({ length: 6 }).map((_, i) => (
              <article key={i} className='rounded-2xl bg-zinc-900 p-6 '>
                <div className='flex items-center gap-3 mb-5'>
                  <div className='h-6 w-6 rounded bg-zinc-800 shimmer' />
                  <div className='h-6 w-56 rounded bg-zinc-800 shimmer' />
                </div>

                <div className='h-3 w-full rounded-full bg-zinc-800 overflow-hidden'>
                  <div className='h-full w-3/4 shimmer' />
                </div>

                <div className='h-5 w-32 rounded bg-zinc-800 shimmer mt-5' />
              </article>
            ))}

            <article className='col-span-1 md:col-span-2 rounded-3xl bg-zinc-900 p-6'>
              <div className='h-6 w-40 rounded bg-zinc-800 animate-pulse mb-8' />

              <div className='grid grid-cols-7 gap-2'>
                {Array.from({ length: 35 }).map((_, i) => (
                  <div
                    key={i}
                    className='h-4 w-4 rounded bg-zinc-800 animate-pulse'
                  />
                ))}
              </div>
            </article>
          </section>
        </section>
      </section>
    </main>
  );
}
