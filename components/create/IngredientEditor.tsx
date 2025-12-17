"use client";

import React, { useState } from "react";
import { GripVertical, X, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRecipeStore } from "@/lib/stores/useRecipeStore";

export function IngredientEditor() {
  const { activeRecipe, updateRecipe } = useRecipeStore();
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newIngredient, setNewIngredient] = useState({ amount: "", name: "" });

  const ingredients = activeRecipe?.ingredients || [];

  const handleAddIngredient = () => {
    if (newIngredient.amount.trim() && newIngredient.name.trim() && activeRecipe) {
      const updated = {
        ...activeRecipe,
        ingredients: [...ingredients, newIngredient],
      };
      updateRecipe(updated);
      setNewIngredient({ amount: "", name: "" });
    }
  };

  const handleDeleteIngredient = (index: number) => {
    if (activeRecipe) {
      const updated = {
        ...activeRecipe,
        ingredients: ingredients.filter((_, i) => i !== index),
      };
      updateRecipe(updated);
    }
  };

  const handleUpdateIngredient = (
    index: number,
    field: "amount" | "name",
    value: string
  ) => {
    if (activeRecipe) {
      const updated = {
        ...activeRecipe,
        ingredients: ingredients.map((ing, i) =>
          i === index ? { ...ing, [field]: value } : ing
        ),
      };
      updateRecipe(updated);
    }
  };

  return (
    <div className="px-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-foreground tracking-tight">
          Ingredients
        </h3>
        <span className="text-sm text-muted-foreground font-medium">
          {ingredients.length} items
        </span>
      </div>
      {/* Existing Items List */}
      <div className="space-y-3 mb-4">
        {ingredients.map((item, index) => (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-3 bg-card border border-border rounded-xl shadow-sm group"
          >
            <GripVertical className="text-gray-300 cursor-grab active:cursor-grabbing w-6 h-6" />
            <div className="flex-1 text-foreground font-medium text-sm">
              {editingIndex === index ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={item.amount}
                    onChange={(e) =>
                      handleUpdateIngredient(index, "amount", e.target.value)
                    }
                    className="w-20 px-2 py-1 bg-background border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="amount"
                  />
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) =>
                      handleUpdateIngredient(index, "name", e.target.value)
                    }
                    className="flex-1 px-2 py-1 bg-background border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="ingredient"
                  />
                </div>
              ) : (
                <>
                  <span className="font-bold mr-1">{item.amount}</span>
                  {item.name}
                </>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-red-500 hover:bg-red-50 transition-colors w-7 h-7"
              onClick={() => handleDeleteIngredient(index)}
            >
              <X className="w-4 h-4" />
            </Button>
          </motion.div>
        ))}
      </div>
      {/* Add New Ingredient */}
      <div className="space-y-2">
        {editingIndex === null && ingredients.length > 0 && (
          <div className="flex gap-2 items-center">
            <input
              type="text"
              value={newIngredient.amount}
              onChange={(e) =>
                setNewIngredient({ ...newIngredient, amount: e.target.value })
              }
              className="w-24 px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="amount"
            />
            <input
              type="text"
              value={newIngredient.name}
              onChange={(e) =>
                setNewIngredient({ ...newIngredient, name: e.target.value })
              }
              className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="ingredient name"
            />
            <Button
              size="sm"
              onClick={handleAddIngredient}
              className="bg-primary text-black hover:bg-primary/80"
            >
              Add
            </Button>
          </div>
        )}
        <Button
          variant="outline"
          className="w-full border-2 border-dashed border-primary/40 bg-primary/5 hover:bg-primary/10 rounded-xl py-6 flex items-center justify-center gap-2 text-primary font-bold text-sm transition-colors h-auto"
          onClick={() => {
            if (newIngredient.amount.trim() && newIngredient.name.trim()) {
              handleAddIngredient();
            }
          }}
        >
          <Plus className="w-5 h-5" />
          Add Ingredient
        </Button>
      </div>
    </div>
  );
}
