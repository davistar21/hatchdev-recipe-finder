import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function MainLayout({ children, className = "" }: MainLayoutProps) {
  return (
    <div
      className={`min-h-screen bg-background text-foreground font-display overflow-x-hidden md:p-4 ${className}`}
    >
      {children}
    </div>
  );
}
