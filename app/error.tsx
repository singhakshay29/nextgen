"use client";

import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
      <section className="max-w-md w-full rounded-3xl bg-zinc-900 p-8 text-center">
        <AlertTriangle
          size={64}
          className="mx-auto text-red-400"
        />

        <h1 className="mt-6 text-3xl font-bold text-white">
          Something went wrong
        </h1>

        <p className="mt-3 text-zinc-400">
          We couldn&apos;t load your dashboard data.
          Please try again.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => reset()}
            className="
              rounded-xl
              bg-cyan-500
              px-5
              py-3
              font-medium
              text-black
              transition-transform
              hover:scale-105
            "
          >
            Try Again
          </button>

          <button
            onClick={() => window.location.href = "/"}
            className="
              rounded-xl
              border
              border-zinc-700
              px-5
              py-3
              text-white
            "
          >
            Dashboard
          </button>
        </div>
      </section>
    </main>
  );
}