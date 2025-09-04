export default function Community() {
  const rows = [
    { name: "Alex R.", placements: 12, streak: 4 },
    { name: "Priya S.", placements: 9, streak: 3 },
    { name: "Jordan K.", placements: 7, streak: 2 },
  ];
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold">Community Leaderboard</h1>
      <p className="mt-2 text-gray-700">Public, opt‑in rankings to make performance visible and fun.</p>
      <div className="mt-6 border rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-600 text-sm">
            <tr><th className="p-4">Broker</th><th className="p-4">Placements</th><th className="p-4">Streak</th></tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t">
                <td className="p-4">{r.name}</td>
                <td className="p-4">{r.placements}</td>
                <td className="p-4">{r.streak} weeks</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}