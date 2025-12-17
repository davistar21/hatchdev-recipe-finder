"use client";

import { useState } from "react";
import { useInteractionStore } from "@/lib/stores/useInteractionStore";

export default function AddReview({ recipeId }: { recipeId: string }) {
  const [comment, setComment] = useState("");
  const { addReview } = useInteractionStore();

  const submit = async () => {
    await addReview(recipeId, { comment });
    setComment("");
  };

  return (
    <div className="space-y-2">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full border rounded p-2"
      />
      <button onClick={submit} className="btn-primary">
        Submit Review
      </button>
    </div>
  );
}
