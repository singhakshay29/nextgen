import Link from "next/link";

export default function NotFound() {
    return (
      <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <section className="text-center">
          <h1 className="text-7xl font-bold">404</h1>
  
          <h2 className="mt-4 text-2xl font-semibold">
            Page Not Found
          </h2>
  
          <p className="mt-2 text-zinc-400">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
  
          <Link
            href="/"
            className="inline-block mt-6 rounded-lg bg-cyan-500 px-6 py-3 text-black font-medium"
          >
            Go Home
          </Link>
        </section>
      </main>
    );
  }