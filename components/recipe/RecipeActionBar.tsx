"use client";

import React, { useState } from "react";
import { Heart, Bookmark, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
      <Button
        variant="ghost"
        className="flex-1 flex-col h-auto py-3 rounded-xl hover:bg-muted group"
        onClick={() => setLiked(!liked)}
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
      </Button>

      <div className="w-px h-8 bg-border"></div>

      <Button
        variant="ghost"
        className="flex-1 flex-col h-auto py-3 rounded-xl hover:bg-muted group"
        onClick={() => setSaved(!saved)}
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
      </Button>

      <div className="w-px h-8 bg-border"></div>

      <Button
        variant="ghost"
        className="flex-1 flex-col h-auto py-3 rounded-xl hover:bg-muted group"
      >
        <Star className="w-6 h-6 text-muted-foreground group-hover:text-yellow-500 transition-colors" />
        <span className="text-xs font-semibold text-muted-foreground">
          {rating} ({reviewsCount})
        </span>
      </Button>
    </motion.div>
  );
}
