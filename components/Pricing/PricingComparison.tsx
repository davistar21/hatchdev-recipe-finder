"use client";

import { useEffect } from "react";
import { useInteractionStore } from "@/lib/stores/useInteractionStore";

export default function PricingComparison({ recipeId } : { recipeId: string} ) {
  const { pricing, fetchPricing } = useInteractionStore();

  useEffect(() => {
    fetchPricing(recipeId);
  }, [recipeId]);

  if (!pricing) return null;

  return (
    <div className="border rounded p-4">
      <h3 className="font-semibold mb-2">Ingredient Pricing</h3>
      <p>Instacart: ₦{pricing.instacart}</p>
      <p>Amazon: ₦{pricing.amazon}</p>
    </div>
  );
}
