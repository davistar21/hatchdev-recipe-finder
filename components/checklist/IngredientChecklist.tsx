"use client";

import { useEffect } from "react";
import { useInteractionStore } from "@/lib/stores/useInteractionStore";

export default function IngredientChecklist({ ingredients }: { ingredients: { id: string; name: string }[] }) {
  const { checklist, toggleIngredient, loadChecklist } =
    useInteractionStore();

  useEffect(() => {
    loadChecklist();
  }, []);

  return (
    <ul className="space-y-2">
      {ingredients.map((item) => (
        <li
          key={item.id}
          onClick={() => toggleIngredient(item.id)}
          className={`cursor-pointer p-2 rounded ${
            checklist[item.id]
              ? "line-through text-muted-foreground"
              : ""
          }`}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}
