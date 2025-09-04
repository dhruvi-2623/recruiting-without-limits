"use client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiOut, setAiOut] = useState<null | { headline: string; bullets: string[]; fitScore?: number; mock?: boolean }>(null);

  async function joinWaitlist(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setEmail("");
    alert("You're on the waitlist.");
  }

  async function askAI(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const job = (form.elements.namedItem("job") as HTMLTextAreaElement).value;
    const candidate = (form.elements.namedItem("candidate") as HTMLTextAreaElement).value;
    setLoading(true);
    setAiOut(null);
    try {
      const r = await fetch("/api/ai-suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ job, candidate }),
      });
      const data = await r.json();
      setAiOut(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="px-6 pt-20 pb-14 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">Recruiting Without Limits.</h1>
        <p className="mt-3 text-xl">Speed and Scale.</p>
        <p className="mt-6 leading-7 text-gray-700">
          We’re building a new model for recruitment. One that combines revenue sharing, a marketing engine, a competitive broker
          community, and an AI-driven learning platform. This is recruitment rewritten for the modern era.
        </p>

        <form onSubmit={joinWaitlist} className="mt-8 flex gap-3">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="border rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
            aria-label="Email address"
          />
          <button type="submit" className="rounded-xl px-5 py-3 bg-black text-white hover:scale-105 transition-transform duration-200">Join waitlist</button>
        </form>
      </section>

      {/* Model preview */}
      <section id="model" className="px-6 pb-24 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {["Revenue Sharing","Marketing Engine","Broker Community"].map((t) => (
          <div key={t} className="border rounded-2xl p-6">
            <h3 className="font-medium">{t}</h3>
            <p className="mt-2 text-gray-700">
              {t === "Revenue Sharing" && "Transparent splits that align incentives."}
              {t === "Marketing Engine" && "Always-on campaigns that compound reach."}
              {t === "Broker Community" && "A competitive network that fuels speed."}
            </p>
          </div>
        ))}
      </section>

      {/* AI demo – tiny mock of "Broker Copilot" */}
      <section className="px-6 pb-24 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold">AI: Candidate Fit & Brief Helper</h2>
        <p className="mt-2 text-gray-700">Paste a job summary and a candidate profile. Get a headline and 3 bullets.</p>
        <form onSubmit={askAI} className="mt-6 grid md:grid-cols-2 gap-4">
          <textarea name="job" placeholder="Job summary..." className="border rounded-2xl p-4 min-h-[160px]" required />
          <textarea name="candidate" placeholder="Candidate profile..." className="border rounded-2xl p-4 min-h-[160px]" required />
          <div className="md:col-span-2 flex items-center gap-3">
            <button type="submit" className="rounded-xl px-5 py-3 bg-black text-white" disabled={loading}>
              {loading ? "Thinking..." : "Get AI Suggestions"}
            </button>
            <span className="text-sm text-gray-500">No key? Route returns a realistic mock.</span>
          </div>
        </form>

        {aiOut && (
          <div className="mt-6 border rounded-2xl p-6">
            <div className="text-sm text-gray-500 mb-2">{aiOut.mock ? "Mock output" : "AI output"}</div>
            <h3 className="text-xl font-medium">{aiOut.headline}</h3>
            <ul className="mt-3 list-disc ml-5 space-y-1">
              {aiOut.bullets?.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            {typeof aiOut.fitScore === "number" && (
              <div className="mt-3 text-sm">Fit score: <span className="font-medium">{aiOut.fitScore}/100</span></div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}