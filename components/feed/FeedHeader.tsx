"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/lib/stores/useAuthStore";

export function FeedHeader() {
  const {user} = useAuthStore();

  const hour = new Date().getHours();

  const greeting =
  hour < 12 ? "Good morning" :
  hour < 18 ? "Good afternoon" :
  "Good evening";

  const username = user?.name || "Username";

  return (
    <div className="sticky top-0 z-30 bg-card shadow-sm">
      <div className="flex items-center justify-between px-4 pb-2 pt-2">
        <div className="flex flex-col">
          <p className="text-muted-foreground text-xs font-medium">
            {greeting},
          </p>
          <h2 className="text-foreground text-2xl font-bold leading-tight tracking-[-0.015em]">
            {username}
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-full overflow-hidden w-10 h-10 border-2 border-white shadow-sm p-0"
          >
            <Link href="/profile">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZdrVTfmq-A2wzvQbyKeK3fY41dBr8dJQR0zsvDHAWnCxQIYoiTqozih1oxd3SEYuxbS8kuiEpo5lrxL8haGbWRqyTln9OiMGCc6vzE1SzskmtjNrpV4PzBs5945UHbFk9-Yodb-I86GphM_uJdHZk0oF525KKGNR_6UrxS8ezPi7IhvxTLvkj-ZfIst9BJgHoRJZRE9z2Glt2CGSdX45kNQL755lQNYx_4mxAg5hlf0KuyeuWQp6BYAkqSqnLL3_myDXoikLAFTw"
                alt="User profile avatar"
                fill
                className="object-cover"
              />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
