"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/stores/useAuthStore";

export default function MainGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const { user } = useAuthStore();

  React.useEffect(() => {
    // if not authenticated, redirect to login
    console.log(
      "THis is user",
      user,
      "tis is pathname",
      pathname,
      "this is router",
      router
    );
    if (!user) {
      router.replace(`/login?next=${encodeURIComponent(pathname)}`);
    }
  }, [user, router, pathname]);

  // while redirecting, don't render protected UI
  if (!user) return null;

  return <>{children}</>;
}
