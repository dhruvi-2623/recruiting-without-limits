"use client";
import { useState } from "react";

export default function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [sum, setSum] = useState<number | null>(null);

  return (
    <div className="border rounded-2xl p-6 max-w-sm">
      <h3 className="text-lg font-medium">Tiny Calculator</h3>
      <input
        value={a}
        onChange={(e) => setA(e.target.value)}
        type="number"
        placeholder="First number"
        className="mt-3 border px-3 py-2 rounded w-full"
      />
      <input
        value={b}
        onChange={(e) => setB(e.target.value)}
        type="number"
        placeholder="Second number"
        className="mt-3 border px-3 py-2 rounded w-full"
      />
      <button
        onClick={() => setSum(Number(a) + Number(b))}
        className="mt-4 rounded-lg px-4 py-2 bg-black text-white"
      >
        Add
      </button>
      {sum !== null && (
        <div className="mt-3 text-sm">
          Result: <span className="font-medium">{sum}</span>
        </div>
      )}
    </div>
  );
}
