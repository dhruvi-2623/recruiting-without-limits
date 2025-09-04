export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <span className="font-semibold">RWL</span>
        <nav className="space-x-6 text-sm">
          <a href="#model" className="hover:opacity-70">Model</a>
          <a href="/community" className="hover:opacity-70">Community</a>
          <a href="/ai" className="hover:opacity-70">AI</a>
        </nav>
      </header>

      <section className="px-6 pt-20 pb-14 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Recruiting Without Limits.
        </h1>
        <p className="mt-3 text-xl">Speed and Scale.</p>
        <p className="mt-6 leading-7 text-gray-700">
          We're building a new model for recruitment. One that combines revenue sharing,
          a marketing engine, a competitive broker community, and an AI-driven learning
          platform. This is recruitment rewritten for the modern era.
        </p>

        <form
          className="mt-8 flex gap-3"
          onSubmit={async (e) => {
            e.preventDefault();
            const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
            await fetch("/api/subscribe", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
            e.currentTarget.reset();
            alert("You're on the waitlist.");
          }}
        >
          <input name="email" type="email" required placeholder="you@company.com"
                 className="border rounded-xl px-4 py-3 w-full"/>
          <button type="submit" className="rounded-xl px-5 py-3 bg-black text-white">
            Join waitlist
          </button>
        </form>
      </section>

      <section id="model" className="px-6 pb-24 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {[
          ["Revenue Sharing", "Transparent splits that align incentives."],
          ["Marketing Engine", "Always-on campaigns that compound reach."],
          ["Broker Community", "A competitive network that fuels speed."]
        ].map(([t, d]) => (
          <div key={t} className="border rounded-2xl p-6">
            <h3 className="font-medium">{t}</h3>
            <p className="mt-2 text-gray-700">{d}</p>
          </div>
        ))}
      </section>

      <footer className="px-6 py-10 text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} RWL
      </footer>
    </main>
  );
}
