"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/lib/stores/useAuthStore";
import { EditProfileModal } from "@/components/profile/EditProfileModal";

export function ProfileStats() {
  const { user } = useAuthStore();
  const [open, setOpen] = React.useState(false);

  const recipes = user?.recipesCount ?? 0;
  const followers = user?.followersCount ?? 0;
  const following = user?.followingCount ?? 0;

  return (
    <div className="px-4 flex flex-col gap-6">
      <div className="flex justify-between px-2 gap-2">
        <div className="flex flex-1 flex-col gap-0.5 items-center text-center">
          <p className="text-foreground text-xl font-bold leading-tight">
            {recipes}
          </p>
          <p className="text-muted-foreground text-xs font-medium">Recipes</p>
        </div>
        <div className="w-px bg-border h-8 self-center"></div>
        <div className="flex flex-1 flex-col gap-0.5 items-center text-center">
          <p className="text-foreground text-xl font-bold leading-tight">
            {followers}
          </p>
          <p className="text-muted-foreground text-xs font-medium">Followers</p>
        </div>
        <div className="w-px bg-border h-8 self-center"></div>
        <div className="flex flex-1 flex-col gap-0.5 items-center text-center">
          <p className="text-foreground text-xl font-bold leading-tight">
            {following}
          </p>
          <p className="text-muted-foreground text-xs font-medium">Following</p>
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full font-bold shadow-sm"
        onClick={() => setOpen(true)}
      >
        Edit Profile
      </Button>

      <EditProfileModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
