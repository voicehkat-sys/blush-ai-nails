"use client";

import { useState } from "react";

export default function AIPage() {
const [prompt, setPrompt] = useState("");
const [designs, setDesigns] = useState<any[]>([]);
const [loading, setLoading] = useState(false);

  const examples = [
    {
      title: "Нежный свадебный",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500",
    },
    {
      title: "Френч с блестками",
      image:
        "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=500",
    },
    {
      title: "Розовый минимализм",
      image:
        "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=500",
    },
  ];

  return (
    <main className="min-h-screen bg-pink-50 p-10">
      <h1 className="text-5xl font-bold text-pink-600 mb-8">
        AI-подбор дизайна
      </h1>

      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-2xl">
        <label className="block mb-3 font-semibold">
          Опишите пожелания клиента
        </label>

        <textarea
  value={prompt}
  onChange={(e) => setPrompt(e.target.value)}
  className="w-full border rounded-xl p-4 h-40"
  placeholder="Например: нежный свадебный маникюр с блестками..."
/>

        <button
          onClick={async () => {
  setLoading(true);

  const res = await fetch("/api/design", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
    }),
  });

  const data = await res.json();

  setDesigns(data.designs);

  setLoading(false);
}}
          className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white rounded-xl py-4 text-xl"
        >
         {loading ? "Подбираем..." : "✨ Подобрать дизайн"}
        </button>
      </div>

      {designs.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {designs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}1