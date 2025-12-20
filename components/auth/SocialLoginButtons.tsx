import React from "react";
import { Star } from "lucide-react";

export function SocialLoginButtons() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {/* Google */}
      <button className="flex items-center justify-center h-12 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors shadow-sm group">
        <div className="w-5 h-5 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-600 group-hover:bg-white">
          <span className="font-bold text-sm text-zinc-800 dark:text-zinc-200">
            G
          </span>
        </div>
      </button>
      {/* Apple */}
      <button className="flex items-center justify-center h-12 rounded-lg bg-black dark:bg-white border border-transparent hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm">
        <Star className="text-white dark:text-black w-[20px] h-[20px]" />{" "}
        {/* Placeholder for Apple logo */}
      </button>
      {/* Facebook */}
      <button className="flex items-center justify-center h-12 rounded-lg bg-[#1877F2] border border-transparent hover:bg-[#166fe5] transition-colors shadow-sm">
        <span className="font-bold text-lg text-white">f</span>
      </button>
    </div>
  );
}
