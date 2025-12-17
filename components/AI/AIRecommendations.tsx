"use client";

import { useState } from "react";
import { useInteractionStore } from "@/lib/stores/useInteractionStore";

export default function AIRecommendations() {
  const [mood, setMood] = useState("");
  const { recommendations, fetchRecommendations } =
    useInteractionStore();

  return (
    <div>
      <input
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        placeholder="Enter your mood"
        className="border p-2 w-full"
      />
      <button
        onClick={() => fetchRecommendations(mood)}
        className="btn-primary mt-2"
      >
        Get Recommendations
      </button>

      <ul className="mt-4">
        {recommendations.map((rec) => (
          <li key={rec.id}>{rec.title}</li>
        ))}
      </ul>
    </div>
  );
}
