"use client";

import React from "react";
import { motion } from "framer-motion";

const INSTRUCTIONS = [
  {
    title: "Boil the Pasta",
    description:
      "Bring a large pot of salted water to a boil. Add the pasta and cook according to package instructions until al dente.",
    step: 1,
  },
  {
    title: "Prepare the Sauce",
    description:
      "While pasta cooks, combine avocado, lime juice, garlic, olive oil, spinach, basil, and pecans in a food processor.",
    step: 2,
  },
  {
    title: "Combine & Serve",
    description:
      "Drain pasta and return to pot. Pour the avocado sauce over the pasta and toss until fully coated. Season with salt and pepper.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmtCb3QML_REuJ8TM4lfLat8S4lRd0cEILMUMRwEDM4eXXW6F-pQUIfUvl3tCs424RaCQhdZdVFiAqGxpYiTDGeFs1FuMYiN-XVdxMRgx6upGk3esOrxp7ZX7BOb3eX-YFAXQ-08re7uLUqYmdqFdFJKtLgXWjsd3Q4qLAjYYo1XqYVTu3mGys06LpXC8O3uqsMubVUy2F4mF0MdRhhaKK5ZaArO55aTCP5LcmC48slZprxEIIqlguhOuKofJuW2_BlwytxAQ0DzM",
    step: 3,
  },
];

export function InstructionList() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold text-foreground">Instructions</h2>
      <div className="relative pl-4 border-l-2 border-border space-y-8">
        {INSTRUCTIONS.map((item, index) => (
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
