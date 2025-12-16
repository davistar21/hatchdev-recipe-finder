"use client";

import React from "react";
import { Search, ChefHat, Users } from "lucide-react";
import { motion } from "framer-motion";

export function LandingFeatures() {
  return (
    <section className="py-24 bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-foreground">
            Everything you need to cook better
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From finding the perfect recipe to sharing your own creations,
            we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Search className="w-8 h-8 text-foreground" />,
              title: "Discover",
              description:
                "Find recipes based on ingredients you already have or moods you're in.",
            },
            {
              icon: <ChefHat className="w-8 h-8 text-foreground" />,
              title: "Cook",
              description:
                "Follow step-by-step instructions with interactive checklists and timers.",
            },
            {
              icon: <Users className="w-8 h-8 text-foreground" />,
              title: "Share",
              description:
                "Build your profile, save favorites, and share your culinary journey.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-3xl overflow-hidden bg-background border-2 border-transparent hover:border-primary/50 transition-all p-8 shadow-sm hover:shadow-xl"
            >
              <div className="flex flex-col gap-4 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full opacity-0 group-hover:opacity-10 blur-3xl bg-primary transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
