"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Share,
  MoreHorizontal,
  Clock,
  Flame,
  Star,
  Edit2,
  Trash2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/lib/stores/useAuthStore";
import { useRecipeStore } from "@/lib/stores/useRecipeStore";

interface RecipeHeroProps {
  recipe: Recipe;
}

export function RecipeHero({ recipe }: RecipeHeroProps) {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const { user } = useAuthStore();
  const { deleteRecipe } = useRecipeStore();

  const isOwner = user?.id === recipe.chef.id;

  const handleEdit = () => {
    router.push(`/create?id=${recipe.id}`);
  };

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this recipe?")) {
      await deleteRecipe(recipe.id);
      router.push("/feed");
    }
  };
  return (
    <div className="relative w-full h-[420px] rounded-b-3xl overflow-hidden shadow-sm z-0">
      {/* Top Navigation Overlay */}
      <div className="absolute top-0 left-0 w-full p-4 pt-6 md:pt-8 flex justify-between items-center z-20">
        <Link href="/feed">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-black/50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.div>
        </Link>
        <div className="flex gap-3 relative">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-black/50 hover:text-white transition-colors border-none"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Share className="w-5 h-5" />
            </motion.button>
          </Button>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-black/50 hover:text-white transition-colors border-none"
              onClick={() => setShowMenu(!showMenu)}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MoreHorizontal className="w-5 h-5" />
              </motion.button>
            </Button>
            
            {/* Dropdown Menu */}
            {showMenu && isOwner && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-48 bg-card rounded-xl shadow-lg border border-border overflow-hidden z-30"
              >
                <Button
                  variant="ghost"
                  className="w-full justify-start rounded-none hover:bg-muted text-foreground text-sm gap-3 px-4 py-3 h-auto font-medium"
                  onClick={() => {
                    handleEdit();
                    setShowMenu(false);
                  }}
                >
                  <Edit2 className="w-4 h-4" />
                  Edit Recipe
                </Button>
                <div className="border-t border-border" />
                <Button
                  variant="ghost"
                  className="w-full justify-start rounded-none hover:bg-red-50 text-red-600 text-sm gap-3 px-4 py-3 h-auto font-medium"
                  onClick={() => {
                    handleDelete();
                    setShowMenu(false);
                  }}
                >
                  <Trash2 className="w-4 h-4" />
                  Delete Recipe
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${recipe.image}')`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="absolute bottom-0 left-0 w-full p-5 pb-8 text-white z-10"
      >
        {recipe.isTopRated && (
          <div className="inline-flex items-center gap-1 bg-primary/90 text-black px-2.5 py-1 rounded-lg mb-3 shadow-lg backdrop-blur-sm">
            <Star className="w-[18px] h-[18px] fill-current" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Top Rated
            </span>
          </div>
        )}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 shadow-sm">
          {recipe.title}
        </h1>
        <div className="flex items-center gap-4 text-sm font-medium text-white/90">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <span>{recipe.time}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/50"></div>
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center">
              <Flame className="w-4 h-4" />
            </div>
            <span>{recipe.calories}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
