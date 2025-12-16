"use client";

import React from "react";
import { Search, SlidersHorizontal } from "lucide-react";

export function SearchBar() {
  return (
    <div className="px-4 py-3 bg-card sticky top-[60px] z-30 shadow-sm">
      <div className="flex w-full items-center gap-3">
        <label className="flex flex-col flex-1 h-12">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
            <div className="text-muted-foreground flex border-none bg-background items-center justify-center pl-4 rounded-l-xl border-r-0">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-foreground focus:outline-0 focus:ring-0 border-none bg-background focus:border-none h-full placeholder:text-muted-foreground px-4 rounded-l-none border-l-0 pl-2 text-base font-medium leading-normal"
              placeholder="Search recipes, ingredients..."
            />
          </div>
        </label>
        <button className="flex items-center justify-center h-12 w-12 bg-primary rounded-xl text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm shrink-0">
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
