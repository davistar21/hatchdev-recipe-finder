"use client";

import React from "react";
import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export function CookingModeBar() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
      className="fixed bottom-0 left-0 w-full p-4 bg-background/80 backdrop-blur-md border-t border-border z-40 max-w-md mx-auto right-0"
    >
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-foreground dark:bg-primary text-background dark:text-foreground font-bold text-lg py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 transform transition-all"
      >
        <PlayCircle className="w-6 h-6" />
        Start Cooking Mode
      </motion.button>
    </motion.div>
  );
}
