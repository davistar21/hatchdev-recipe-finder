"use client";

import React from "react";
import { Star } from "lucide-react";

export function ReviewTeaser() {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Reviews (124)</h2>
        <button className="text-primary font-bold text-sm hover:underline">
          See all
        </button>
      </div>
      <div className="bg-card p-4 rounded-xl border border-border">
        <div className="flex items-start gap-3">
          <div
            className="w-8 h-8 rounded-full bg-gray-300 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVW3moqUNUyfbf02R9hPfE7kyWz0k_4_8cq3FrWhS88lEPIsJWbi9HbDngjaEb6wxmtzNY8jQOBaPxk7-vO5NC4YGNOEXFBvF4WMZM6RxzmpR81auceyXU48Xcsr_hPixcRxqwYXTnZw_VFkvx0o5qkNSpg8mTHmZDj-Z1rLzGwjYhxwTvaPpust_acX8JkIm69P2Q6LgHmnIoNVNSz0SlMRQCDILrTJgSD3vo3cEYAnqtfKQbzRUbhTjXY1jcfy1-PCB5ra7y5tc')",
            }}
          ></div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-bold text-foreground">
                Sarah M.
              </span>
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-[14px] h-[14px] fill-current" />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">
              Absolutely delicious! The lime really cuts through the richness of
              the avocado. My kids loved it too, which is a rare win!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
