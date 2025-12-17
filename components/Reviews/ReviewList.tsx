"use client";

import { useEffect } from "react";
import { useInteractionStore } from "@/lib/stores/useInteractionStore";

export default function ReviewList({ recipeId }: { recipeId: string }) {
  const { reviews, fetchReviews } = useInteractionStore();

  useEffect(() => {
    fetchReviews(recipeId);
  }, [recipeId]);

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id} className="border p-2 rounded mb-2">
          <p className="font-semibold">{review.userName}</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
