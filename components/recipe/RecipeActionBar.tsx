"use client";

import React, { useState } from "react";
import { Heart, Bookmark, Star } from "lucide-react";
import { motion } from "framer-motion";

interface RecipeActionBarProps {
  likes?: string;
  rating: number;
  reviewsCount: number;
}

export function RecipeActionBar({
  likes = "1.2k",
  rating,
  reviewsCount,
}: RecipeActionBarProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.35 }}
      className="flex justify-between items-center bg-card rounded-2xl p-2 shadow-sm border border-border"
    >
      <button
        onClick={() => setLiked(!liked)}
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 rounded-xl hover:bg-muted transition-colors group"
      >
        <motion.div whileTap={{ scale: 0.8 }}>
          <Heart
            className={`w-6 h-6 transition-colors ${
              liked
                ? "fill-red-500 text-red-500"
                : "text-muted-foreground group-hover:text-red-500"
            }`}
          />
        </motion.div>
        <span className="text-xs font-semibold text-muted-foreground">
          {likes}
        </span>
      </button>

      <div className="w-px h-8 bg-border"></div>

      <button
        onClick={() => setSaved(!saved)}
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 rounded-xl hover:bg-muted transition-colors group"
      >
        <motion.div whileTap={{ scale: 0.8 }}>
          <Bookmark
            className={`w-6 h-6 transition-colors ${
              saved
                ? "fill-primary text-primary"
                : "text-muted-foreground group-hover:text-primary"
            }`}
          />
        </motion.div>
        <span className="text-xs font-semibold text-foreground">Saved</span>
      </button>

      <div className="w-px h-8 bg-border"></div>

      <button className="flex-1 flex flex-col items-center justify-center gap-1 py-3 rounded-xl hover:bg-muted transition-colors group">
        <Star className="w-6 h-6 text-muted-foreground group-hover:text-yellow-500 transition-colors" />
        <span className="text-xs font-semibold text-muted-foreground">
          {rating} ({reviewsCount})
        </span>
      </button>
    </motion.div>
  );
}
