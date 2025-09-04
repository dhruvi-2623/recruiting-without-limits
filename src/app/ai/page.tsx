export default function AI() {
  return (
    <section className="px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold">AI Roadmap</h1>
      <ul className="mt-4 list-disc ml-6 space-y-2 text-gray-700">
        <li><span className="font-medium">Broker Copilot:</span> fit scoring, brief generation, interview plans.</li>
        <li><span className="font-medium">RAG:</span> index past placements, hiring rubrics, success notes.</li>
        <li><span className="font-medium">Quality loops:</span> human feedback improves prompts & routing.</li>
      </ul>
    </section>
  );
}