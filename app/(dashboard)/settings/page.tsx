export default function SettingsPage() {
    return (
      <main className="min-h-screen bg-zinc-950 text-white p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold">Settings</h1>
          <p className="text-zinc-400 mt-2">
            Manage your dashboard preferences.
          </p>
        </header>
  
        <section className="grid gap-4 max-w-2xl">
          <article className="rounded-2xl bg-zinc-900 p-6">
            <h2 className="font-semibold text-lg">
              Appearance
            </h2>
  
            <p className="mt-2 text-zinc-400">
              Dark mode enabled
            </p>
          </article>
  
          <article className="rounded-2xl bg-zinc-900 p-6">
            <h2 className="font-semibold text-lg">
              Notifications
            </h2>
  
            <p className="mt-2 text-zinc-400">
              Email notifications enabled
            </p>
          </article>
  
          <article className="rounded-2xl bg-zinc-900 p-6">
            <h2 className="font-semibold text-lg">
              Profile
            </h2>
  
            <p className="mt-2 text-zinc-400">
              Akshay Singh
            </p>
          </article>
        </section>
      </main>
    );
  }