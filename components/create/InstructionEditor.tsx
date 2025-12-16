"use client";

import React from "react";
import { Edit2, Trash2, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";

export function InstructionEditor() {
  return (
    <div className="px-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-foreground tracking-tight">
          Instructions
        </h3>
      </div>
      {/* Steps List */}
      <div className="space-y-6 relative pl-4 border-l-2 border-border ml-3">
        {/* Step 1 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative pl-6"
        >
          <div className="absolute -left-[31px] top-0 w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-background">
            1
          </div>
          <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Bring a large pot of salted water to a boil. Add the pasta and
              cook until al dente.
            </p>
            <div className="flex justify-end gap-3 mt-3 pt-3 border-t border-border/50">
              <button className="text-muted-foreground hover:text-primary">
                <Edit2 className="w-4 h-4" />
              </button>
              <button className="text-muted-foreground hover:text-red-500">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
        {/* Step 2 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="relative pl-6"
        >
          <div className="absolute -left-[31px] top-0 w-8 h-8 rounded-full bg-card border-2 border-primary text-foreground flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-background">
            2
          </div>
          <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
            <textarea
              className="w-full bg-transparent border-none p-0 text-sm text-foreground placeholder-muted-foreground focus:ring-0 resize-none"
              placeholder="Describe the next step..."
              rows={3}
            ></textarea>
          </div>
        </motion.div>
      </div>
      {/* Add Step Button */}
      <div className="mt-6 ml-3 pl-6 relative">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full border-2 border-dashed border-border hover:border-primary text-muted-foreground hover:text-primary rounded-xl py-3 flex items-center justify-center gap-2 font-bold text-sm transition-all group"
        >
          <PlusCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          Add Next Step
        </motion.button>
      </div>
    </div>
  );
}
