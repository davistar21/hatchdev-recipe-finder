"use client";

import React from "react";
import Link from "next/link";
import { Home, Search, Plus, Bookmark, User } from "lucide-react";

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full max-w-md mx-auto bg-card border-t border-border pb-5 pt-3 px-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40">
      <div className="flex items-center justify-between">
        <button className="flex flex-col items-center gap-1 text-primary">
          <Home className="w-[26px] h-[26px] fill-current" />
          <span className="text-[10px] font-medium">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
          <Search className="w-[26px] h-[26px]" />
          <span className="text-[10px] font-medium">Search</span>
        </button>
        {/* Center Add Button */}
        <Link href="/create">
          <button className="flex items-center justify-center -mt-8 bg-foreground text-card rounded-full w-14 h-14 shadow-lg hover:scale-105 transition-transform border-4 border-background">
            <Plus className="w-[28px] h-[28px]" />
          </button>
        </Link>
        <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
          <Bookmark className="w-[26px] h-[26px]" />
          <span className="text-[10px] font-medium">Saved</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
          <User className="w-[26px] h-[26px]" />
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </div>
    </nav>
  );
}
