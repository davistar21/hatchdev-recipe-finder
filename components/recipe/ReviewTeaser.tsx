"use client";

import React from "react";
import { Star } from "lucide-react";

interface ReviewTeaserProps {
  reviews: Review[];
  totalReviews: number;
}

export function ReviewTeaser({ reviews, totalReviews }: ReviewTeaserProps) {
  // Just show the first review for teaser
  const topReview = reviews[0];

  if (!topReview) return null;

  return (
    <div className="flex flex-col gap-4 mb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">
          Reviews ({totalReviews})
        </h2>
        <button className="text-primary font-bold text-sm hover:underline">
          See all
        </button>
      </div>
      <div className="bg-card p-4 rounded-xl border border-border">
        <div className="flex items-start gap-3">
          <div
            className="w-8 h-8 rounded-full bg-gray-300 bg-cover bg-center"
            style={{
              backgroundImage: `url('${topReview.userAvatar}')`,
            }}
          ></div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-bold text-foreground">
                {topReview.userName}
              </span>
              <div className="flex text-primary">
                {[...Array(topReview.rating)].map((_, i) => (
                  <Star key={i} className="w-[14px] h-[14px] fill-current" />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {topReview.comment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
