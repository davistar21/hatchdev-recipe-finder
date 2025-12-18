"use client";

import React from "react";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileStats } from "@/components/profile/ProfileStats";
import { ProfileGrid } from "@/components/profile/ProfileGrid";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useAuthStore } from "@/lib/stores/useAuthStore";

export default function ProfilePage() {
  const { fetchProfile, user } = useAuthStore();

  React.useEffect(() => {
    
    fetchProfile();
  }, [fetchProfile]);
  return (
    <div className="bg-background min-h-screen flex justify-center font-display">
      <div className="relative flex h-full w-full max-w-md flex-col bg-background shadow-2xl overflow-hidden min-h-screen">
        {/* Top App Bar */}
        <header className="sticky top-0 z-10 flex items-center bg-background p-4 pb-2 justify-between border-b border-border">
          <div className="w-12"></div> {/* Spacer */}
          <h2 className="text-foreground text-lg font-bold leading-tight flex-1 text-center">
            Profile
          </h2>
          <div className="flex w-12 items-center justify-end">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Settings className="w-6 h-6" />
            </Button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto no-scrollbar">
          <ProfileHeader />
          <ProfileStats />
          <div className="h-6"></div> {/* Spacer */}
          <ProfileGrid />
        </main>
      </div>
    </div>
  );
}
