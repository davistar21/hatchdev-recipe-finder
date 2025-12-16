"use client";

import React from "react";
import { ShoppingBasket, ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface IngredientListProps {
  ingredients: Ingredient[];
  servings: number;
}

export function IngredientList({ ingredients, servings }: IngredientListProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Ingredients</h2>
        <Button
          variant="secondary"
          size="sm"
          className="font-bold text-muted-foreground"
        >
          {servings} Servings
        </Button>
      </div>

      {/* Price Check CTA */}
      <Button
        asChild
        className="w-full h-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-xl p-4 flex items-center justify-between group shadow-lg shadow-primary/20"
      >
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <div className="flex items-center gap-3">
            <div className="bg-black p-2 rounded-lg text-white">
              <ShoppingBasket className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-black font-bold text-sm">Check local prices</p>
              <p className="text-black/70 text-xs">Compare stores nearby</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </Button>

      {/* Ingredients List */}
      <div className="flex flex-col gap-3">
        {ingredients.map((item, index) => (
          <motion.label
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-card border border-transparent hover:border-border transition-all cursor-pointer"
          >
            <input
              type="checkbox"
              className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary bg-muted/50"
            />
            <span className="flex-1 text-sm font-medium text-foreground">
              {item.name}
            </span>
            <span className="text-sm text-muted-foreground font-medium">
              {item.amount}
            </span>
          </motion.label>
        ))}
      </div>

      {ingredients.length > 5 && (
        <button className="mt-2 text-sm font-bold text-muted-foreground flex items-center justify-center gap-1 hover:text-foreground transition-colors">
          Show more items <ChevronDown className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
