import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Plus, Bookmark, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const NAV_ITEMS = [
  {
    label: "Home",
    href: "/feed",
    icon: Home,
    fillOnActive: true,
    isHome: true,
  },
  {
    label: "Search",
    href: "/search",
    icon: Search,
  },
  {
    label: "Add",
    href: "/create",
    icon: Plus,
    isPrincipal: true,
  },
  {
    label: "Saved",
    href: "/saved",
    icon: Bookmark,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: User,
    fillOnActive: true,
  },
];

export function BottomNav() {
  const pathname = usePathname();

  const checkIsActive = (href: string, isHome?: boolean) => {
    if (isHome) return pathname === "/feed" || pathname === "/";
    return pathname === href;
  };

  return (
    <motion.nav
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed bottom-0 w-full max-w-md mx-auto left-1/2 -translate-x-1/2 bg-card border-t border-border pb-5 pt-3 px-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40 rounded-t-2xl"
    >
      <div className="flex items-center justify-between">
        {NAV_ITEMS.map((item) => {
          const active = checkIsActive(item.href, item.isHome);
          const Icon = item.icon;

          // Special rendering for the central "Add" button
          if (item.isPrincipal) {
            return (
              <Link href={item.href} key={item.href}>
                <Button
                  size="icon"
                  className="flex items-center justify-center -mt-8 bg-foreground text-card rounded-full w-14 h-14 shadow-lg hover:scale-105 transition-transform border-4 border-background p-0"
                >
                  <Icon className="w-[28px] h-[28px]" />
                </Button>
              </Link>
            );
          }

          // Standard navigation items
          return (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              className={`flex flex-col items-center gap-1 h-auto hover:bg-transparent p-0 ${
                active
                  ? "text-primary hover:text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Link href={item.href}>
                <Icon
                  className={`w-[26px] h-[26px] ${
                    active && item.fillOnActive ? "fill-current" : ""
                  }`}
                />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </motion.nav>
  );
}
