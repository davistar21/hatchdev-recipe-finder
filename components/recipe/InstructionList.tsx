"use client";

import React from "react";
import { motion } from "framer-motion";

interface InstructionListProps {
  instructions: Instruction[];
}

export function InstructionList({ instructions }: InstructionListProps) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold text-foreground">Instructions</h2>
      <div className="relative pl-4 border-l-2 border-border space-y-8">
        {instructions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            className="relative"
          >
            <div className="absolute -left-[25px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-card text-foreground font-bold text-sm shadow-sm ring-4 ring-background border border-border">
              {item.step}
            </div>
            <div className="bg-card p-4 rounded-xl shadow-sm border border-border">
              <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              {item.image && (
                <div
                  className="mt-3 rounded-lg overflow-hidden h-32 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
