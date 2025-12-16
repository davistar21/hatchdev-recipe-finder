"use client";

import React from "react";

export function BasicInfo() {
  return (
    <div className="px-4 space-y-5">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <label className="text-foreground text-sm font-bold ml-1">
          Recipe Title
        </label>
        <input
          className="w-full bg-card border border-border rounded-xl px-4 py-3.5 text-base font-medium placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground"
          placeholder="Give your recipe a catchy name"
          type="text"
        />
      </div>
      {/* Description */}
      <div className="flex flex-col gap-2">
        <label className="text-foreground text-sm font-bold ml-1">
          Description
        </label>
        <textarea
          className="w-full bg-card border border-border rounded-xl px-4 py-3.5 text-base font-normal placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground min-h-[100px] resize-none"
          placeholder="Tell us the story behind this dish..."
        ></textarea>
      </div>
    </div>
  );
}
