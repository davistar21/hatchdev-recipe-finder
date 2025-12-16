"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Share,
  MoreHorizontal,
  Clock,
  Flame,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

export function RecipeHero() {
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
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-black/50 transition-colors"
          >
            <Share className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-black/50 transition-colors"
          >
            <MoreHorizontal className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYZDJxAMuPgDVX5OnbQaYTUdfxlxGDfaucZ7tScOqVohj-S9FZrzztCuc3ceruOq2DyaR735SnEFAK-yiLvQ3TzVhBXqzN5fAcvhmraOLGG6lC8IpLoU4SLXe1ZuF561S5SJff3vCtL1ZBmZFONmZwBCOaJoEPMeYtp5e8-4kH8XVov97jWfFxPwlJyEb29onNm6oQecP70-XLRKV5hXdO96YDAUV8sVwC3u3ytp1i8TnkpaV0o1gx-Q3p9NcSFDGKSftFX03YLrY')",
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
        <div className="inline-flex items-center gap-1 bg-primary/90 text-black px-2.5 py-1 rounded-lg mb-3 shadow-lg backdrop-blur-sm">
          <Star className="w-[18px] h-[18px] fill-current" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Top Rated
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 shadow-sm">
          Creamy Avocado
          <br />
          Lime Pasta
        </h1>
        <div className="flex items-center gap-4 text-sm font-medium text-white/90">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <span>25 mins</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/50"></div>
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center">
              <Flame className="w-4 h-4" />
            </div>
            <span>420 kcal</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
