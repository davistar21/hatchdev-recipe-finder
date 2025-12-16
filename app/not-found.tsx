"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-6 font-display text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: -20 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mb-8 shadow-lg"
      >
        <UtensilsCrossed className="w-16 h-16 text-muted-foreground" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4">
          Kitchen Nightmare!
        </h1>
        <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
          We whisked everywhere, but we couldn&apos;t find that page. It might
          have been burnt to a crisp or eaten by the dog.
        </p>

        <Button asChild size="lg" className="rounded-full shadow-xl">
          <Link href="/feed" className="flex items-center gap-2">
            <Home className="w-5 h-5" />
            Return to Feed
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
