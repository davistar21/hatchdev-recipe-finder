"use client";

import React from "react";
import Image from "next/image";
import { Heart, Star, Clock, Flame, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RecipeCardProps {
  title: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  rating: number;
  reviews: number;
  time: string;
  calories?: string;
  tag?: string;
  tagIcon?: React.ReactNode;
}

export function RecipeCard({
  title,
  image,
  author,
  rating,
  reviews,
  time,
  calories,
  tag,
  tagIcon,
}: RecipeCardProps) {
  return (
    <article className="flex flex-col rounded-2xl bg-card shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden group">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* Creator Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/90 dark:bg-black/70 backdrop-blur-sm p-1.5 pr-3 rounded-full shadow-sm z-10">
          <div className="relative w-6 h-6 rounded-full overflow-hidden">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xs font-semibold text-black dark:text-white">
            {author.name}
          </span>
        </div>

        {/* Like Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-primary transition-colors text-white hover:text-primary-foreground z-10 w-10 h-10"
        >
          <Heart className="w-5 h-5" />
        </Button>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <h3 className="text-foreground text-lg font-bold leading-tight flex-1 pr-2">
            {title}
          </h3>
          <div className="flex items-center gap-1 bg-background px-2 py-1 rounded-lg">
            <Star className="w-[18px] h-[18px] text-yellow-500 fill-yellow-500" />
            <span className="text-foreground text-sm font-bold">{rating}</span>
            <span className="text-muted-foreground text-xs">({reviews})</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="flex items-center gap-1 text-xs font-medium bg-background px-2 py-1 rounded-md">
              <Clock className="w-4 h-4" />
              {time}
            </div>
            {(calories || tag) && (
              <div className="flex items-center gap-1 text-xs font-medium bg-background px-2 py-1 rounded-md">
                {calories ? (
                  <>
                    <Flame className="w-4 h-4" />
                    {calories}
                  </>
                ) : (
                  <>
                    {tagIcon}
                    {tag}
                  </>
                )}
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
