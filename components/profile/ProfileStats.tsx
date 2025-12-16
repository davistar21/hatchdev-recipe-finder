"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export function ProfileStats() {
  return (
    <div className="px-4 flex flex-col gap-6">
      <div className="flex justify-between px-2 gap-2">
        <div className="flex flex-1 flex-col gap-0.5 items-center text-center">
          <p className="text-foreground text-xl font-bold leading-tight">42</p>
          <p className="text-muted-foreground text-xs font-medium">Recipes</p>
        </div>
        <div className="w-px bg-border h-8 self-center"></div>
        <div className="flex flex-1 flex-col gap-0.5 items-center text-center">
          <p className="text-foreground text-xl font-bold leading-tight">
            1.2k
          </p>
          <p className="text-muted-foreground text-xs font-medium">Followers</p>
        </div>
        <div className="w-px bg-border h-8 self-center"></div>
        <div className="flex flex-1 flex-col gap-0.5 items-center text-center">
          <p className="text-foreground text-xl font-bold leading-tight">150</p>
          <p className="text-muted-foreground text-xs font-medium">Following</p>
        </div>
      </div>

      <Button variant="outline" className="w-full font-bold shadow-sm">
        Edit Profile
      </Button>
    </div>
  );
}
