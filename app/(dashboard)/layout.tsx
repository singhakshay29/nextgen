import MobileBottomBar from "@/components/layout/MobileBottombar";
import Sidebar from "@/components/layout/Sidebar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="flex">
        <Sidebar />

        <section className="flex-1 p-8 pb-24 md:pb-8">
          {children}
        </section>
      </section>

      <MobileBottomBar />
    </main>
  );
}