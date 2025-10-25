import AskTheWeb from "./AskTheWeb";

export default function App() {
  return (
    <main className="flex items-center justify-center w-screen h-screen  from-slate-50 to-white">
      {/* full-page card */}
      <section className="w-full h-full flex flex-col gap-6 p-8  shadow-lg">
        <AskTheWeb />
      </section>
    </main>
  );
}