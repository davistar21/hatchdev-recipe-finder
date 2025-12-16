import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Plus, Bookmark, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BottomNav() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed bottom-0 w-full max-w-md mx-auto bg-card border-t border-border pb-5 pt-3 px-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40">
      <div className="flex items-center justify-between">
        <Button
          asChild
          variant="ghost"
          className={`flex flex-col items-center gap-1 h-auto hover:bg-transparent p-0 ${
            isActive("/feed") || isActive("/")
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Link href="/feed">
            <Home
              className={`w-[26px] h-[26px] ${
                isActive("/feed") || isActive("/") ? "fill-current" : ""
              }`}
            />
            <span className="text-[10px] font-medium">Home</span>
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          className={`flex flex-col items-center gap-1 h-auto hover:bg-transparent p-0 ${
            isActive("/search")
              ? "text-primary hover:text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Link href="/search">
            <Search className="w-[26px] h-[26px]" />
            <span className="text-[10px] font-medium">Search</span>
          </Link>
        </Button>
        {/* Center Add Button */}
        <Link href="/create">
          <Button
            size="icon"
            className="flex items-center justify-center -mt-8 bg-foreground text-card rounded-full w-14 h-14 shadow-lg hover:scale-105 transition-transform border-4 border-background p-0"
          >
            <Plus className="w-[28px] h-[28px]" />
          </Button>
        </Link>
        <Button
          variant="ghost"
          className={`flex flex-col items-center gap-1 h-auto hover:bg-transparent p-0 ${
            isActive("/saved")
              ? "text-primary hover:text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Link href="/saved">
            <Bookmark className="w-[26px] h-[26px]" />
            <span className="text-[10px] font-medium">Saved</span>
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          className={`flex flex-col items-center gap-1 h-auto hover:bg-transparent p-0 ${
            isActive("/profile")
              ? "text-primary hover:text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Link href="/profile">
            <User
              className={`w-[26px] h-[26px] ${
                isActive("/profile") ? "fill-current" : ""
              }`}
            />
            <span className="text-[10px] font-medium">Profile</span>
          </Link>
        </Button>
      </div>
    </nav>
  );
}
