"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Star, ChefHat } from "lucide-react";
import { motion } from "framer-motion";

export function LandingHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-foreground text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">
            <Star className="w-3 h-3 fill-current" />
            <span>The #1 Recipe Community</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-foreground">
            Taste the{" "}
            <span className="text-primary underline decoration-4 decoration-primary/20 underline-offset-4">
              World
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Join the largest community of home cooks. Discover new recipes,
            share your culinary masterpieces, and get inspired daily.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link
              href="/signup"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/30 hover:shadow-primary/40"
            >
              <span>Start Cooking</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/welcome"
              className="w-full sm:w-auto px-8 py-4 bg-card/50 text-foreground rounded-xl font-bold text-lg hover:bg-card/80 border border-border/50 transition-all flex items-center justify-center backdrop-blur-sm"
            >
              Explore Mobile View
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] w-full"
        >
          <div className="relative w-full aspect-square lg:h-full rounded-[2.5rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 outline outline-8 outline-white/40 dark:outline-primary/20">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbc2GV_4GHy3QW5d_OnHieZD3IEZoEB1gPyvC7e6r89a_k1VgkNqvwt9lX8YdSOokSBi5RrXnNESNyxpSCwWtZBl-KzU2gsXk0oGjP7-jyM-AVnmL2ws_Tpltp5DKrr2x7y6qmoETwdICvA1GLJ3OUDVlNcfqwJls7YHanBgwj4T6wdH4LJnF-zHj-InODCRN-l-mBxTfhZR1XKxTbM6kmDUpN9iOgatzY7_dRoi0eGFZcWp_LoEZ9pc7Ve1F0QgnasvFhxLqsZ14")',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-8 left-8 bg-background/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-border/50 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-foreground">
                  <ChefHat size={16} />
                </div>
                <span className="text-sm font-bold text-foreground">
                  Chef's Choice
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-medium">
                "Best salad I've ever made!"
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
