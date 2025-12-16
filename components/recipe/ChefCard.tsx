"use client";

import React from "react";
import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

interface ChefCardProps {
  chef: Chef;
}

export function ChefCard({ chef }: ChefCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-card rounded-xl p-4 shadow-lg shadow-black/5 flex items-center justify-between border border-border"
    >
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-full bg-gray-200 bg-cover bg-center border-2 border-primary"
          style={{
            backgroundImage: `url('${chef.avatar}')`,
          }}
        ></div>
        <div>
          <h3 className="font-bold text-foreground leading-tight">
            {chef.name}
          </h3>
          {chef.isPro && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <BadgeCheck className="w-[14px] h-[14px] text-primary" />
              <span>Pro Chef</span>
            </div>
          )}
        </div>
      </div>
      <button className="px-4 py-2 bg-muted rounded-full text-xs font-bold text-foreground hover:bg-muted/80 transition-colors">
        View Profile
      </button>
    </motion.div>
  );
}
