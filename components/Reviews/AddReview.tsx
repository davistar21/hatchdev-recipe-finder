
"use client";

import { useState } from "react";
import { useInteractionStore } from "@/lib/stores/useInteractionStore";

export default function AddReview({ recipeId }: { recipeId: string }) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const { addReview } = useInteractionStore();

  const submit = async () => {
    await addReview(recipeId, { comment, rating });
    setComment("");
    setRating(5);
  };

  return (
    <div className="space-y-2">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full border rounded p-2"
        placeholder="Write your review..."
      />

      {/* Rating selector */}
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="border rounded p-1"
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num} Star{num > 1 ? "s" : ""}
          </option>
        ))}
      </select>

      <button onClick={submit} className="btn-primary">
        Submit Review
      </button>
    </div>
  );
}
