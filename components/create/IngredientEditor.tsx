"use client";

import React from "react";
import { GripVertical, X, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function IngredientEditor() {
  return (
    <div className="px-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-foreground tracking-tight">
          Ingredients
        </h3>
        <span className="text-sm text-muted-foreground font-medium">
          4 items
        </span>
      </div>
      {/* Existing Items List */}
      <div className="space-y-3 mb-4">
        {[
          { amount: "200g", name: "Spaghetti Pasta" },
          { amount: "2 tbsp", name: "Olive Oil" },
        ].map((item, index) => (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-3 bg-card border border-border rounded-xl shadow-sm group"
          >
            <GripVertical className="text-gray-300 cursor-grab active:cursor-grabbing w-6 h-6" />
            <div className="flex-1 text-foreground font-medium text-sm">
              <span className="font-bold mr-1">{item.amount}</span> {item.name}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-red-500 hover:bg-red-50 transition-colors w-7 h-7"
            >
              <X className="w-4 h-4" />
            </Button>
          </motion.div>
        ))}
      </div>
      {/* Add New Ingredient */}
      <div className="flex gap-2 items-center">
        <Button
          variant="outline"
          className="flex-1 border-2 border-dashed border-primary/40 bg-primary/5 hover:bg-primary/10 rounded-xl py-6 flex items-center justify-center gap-2 text-primary font-bold text-sm transition-colors h-auto"
          asChild
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus className="w-5 h-5" />
            Add Ingredient
          </motion.button>
        </Button>
      </div>
    </div>
  );
}
