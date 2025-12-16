"use client";

import React from "react";
import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

export function ChefCard() {
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
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCcQ8eft21MXpofYD38OBk28qCy0l-oG_k08UqXHuohGNSs6REGzXYoU71ScZGwIXuHg5SB2QF4DZ06RTcoMqUn8LGChGMPyG2UpYQbC-v-AOaXrofTLKMAk80HPNtNGcjp1peZr072b_7hVpHjpYAhc2c5n8pNnfzY-4afT5KX-SCEOh_uc_kRQvi7j-Rz3pRUN4TRUi997xJJvDyJiH8a4rRkQ2ibE_n0-II3vAYtxe4XOXePol5Io1m5Uek66By1yweVeje9sVM')",
          }}
        ></div>
        <div>
          <h3 className="font-bold text-foreground leading-tight">
            Chef Mario
          </h3>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <BadgeCheck className="w-[14px] h-[14px] text-primary" />
            <span>Pro Chef</span>
          </div>
        </div>
      </div>
      <button className="px-4 py-2 bg-muted rounded-full text-xs font-bold text-foreground hover:bg-muted/80 transition-colors">
        View Profile
      </button>
    </motion.div>
  );
}
