"use client";

import React from "react";

export function MetadataSelector() {
  return (
    <div className="space-y-6">
      {/* Difficulty */}
      <div className="px-4">
        <label className="text-foreground text-sm font-bold ml-1 mb-3 block">
          Difficulty
        </label>
        <div className="flex gap-3">
          <button className="flex-1 bg-primary text-black font-bold py-2.5 px-4 rounded-xl text-sm shadow-sm ring-2 ring-primary/20">
            Easy
          </button>
          <button className="flex-1 bg-card border border-border text-muted-foreground font-medium py-2.5 px-4 rounded-xl text-sm hover:bg-muted transition-colors">
            Medium
          </button>
          <button className="flex-1 bg-card border border-border text-muted-foreground font-medium py-2.5 px-4 rounded-xl text-sm hover:bg-muted transition-colors">
            Hard
          </button>
        </div>
      </div>
      {/* Cuisine Scrolls */}
      <div>
        <div className="flex items-center justify-between px-4 mb-3">
          <label className="text-foreground text-sm font-bold ml-1">
            Cuisine
          </label>
          <span className="text-xs font-semibold text-primary cursor-pointer">
            View All
          </span>
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-3 px-4 pb-2">
          {["Italian", "Mexican", "Japanese", "Indian", "Thai"].map(
            (cuisine, index) => (
              <button
                key={cuisine}
                className={`shrink-0 bg-card border ${
                  index === 0
                    ? "border-primary text-foreground"
                    : "border-border text-muted-foreground"
                } font-medium py-2 px-5 rounded-full text-sm hover:border-gray-300`}
              >
                {cuisine}
              </button>
            )
          )}
        </div>
      </div>
      {/* Time Inputs */}
      <div className="px-4">
        <label className="text-foreground text-sm font-bold ml-1 mb-3 block">
          Time Required
        </label>
        <div className="flex gap-4">
          {["Prep Time", "Cook Time"].map((label) => (
            <div key={label} className="flex-1 relative">
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-bold uppercase">
                Min
              </span>
              <input
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-base font-medium focus:ring-primary/50 focus:border-primary text-foreground"
                placeholder="0"
                type="number"
              />
              <p className="text-xs text-muted-foreground mt-1.5 ml-1">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
