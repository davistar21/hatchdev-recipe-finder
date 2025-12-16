"use client";

import React from "react";
import { Camera } from "lucide-react";
import { motion } from "framer-motion";

export function ImageUploader() {
  return (
    <div className="px-4 py-4">
      <motion.div 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative w-full aspect-[4/3] rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary bg-card group cursor-pointer transition-colors overflow-hidden flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center gap-3 p-6 text-center z-10">
          <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center group-hover:scale-110 transition-transform">
            <Camera className="w-8 h-8 text-primary" />
          </div>
          <p className="text-muted-foreground font-medium text-sm">
            Tap to upload cover photo
          </p>
        </div>
        {/* Background placeholder image suggestion */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1495521821758-ee18ece6d918?q=80&w=600&auto=format&fit=crop')",
          }}
        ></div>
      </motion.div>
    </div>
  );
}
