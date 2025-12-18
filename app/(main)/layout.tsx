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

  const { token, user } = useAuthStore();

  React.useEffect(() => {
    // if not authenticated, redirect to login
    if (!token && !user) {
      router.replace(`/login?next=${encodeURIComponent(pathname)}`);
    }
  }, [token, user, router, pathname]);

  // while redirecting, don't render protected UI
  if (!token && !user) return null;

  return <>{children}</>;
}
