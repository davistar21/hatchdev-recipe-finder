"use client";

import React from "react";
import Image from "next/image";

export function FeedHeader() {
  return (
    <div className="sticky top-0 z-30 bg-card shadow-sm">
      <div className="flex items-center justify-between px-4 pb-2 pt-2">
        <div className="flex flex-col">
          <p className="text-muted-foreground text-xs font-medium">
            Good Morning,
          </p>
          <h2 className="text-foreground text-2xl font-bold leading-tight tracking-[-0.015em]">
            Discover
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative rounded-full overflow-hidden w-10 h-10 border-2 border-white shadow-sm">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZdrVTfmq-A2wzvQbyKeK3fY41dBr8dJQR0zsvDHAWnCxQIYoiTqozih1oxd3SEYuxbS8kuiEpo5lrxL8haGbWRqyTln9OiMGCc6vzE1SzskmtjNrpV4PzBs5945UHbFk9-Yodb-I86GphM_uJdHZk0oF525KKGNR_6UrxS8ezPi7IhvxTLvkj-ZfIst9BJgHoRJZRE9z2Glt2CGSdX45kNQL755lQNYx_4mxAg5hlf0KuyeuWQp6BYAkqSqnLL3_myDXoikLAFTw"
              alt="User profile avatar"
              fill
              className="object-cover"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
