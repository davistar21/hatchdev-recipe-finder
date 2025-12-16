import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/layout/MainLayout";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Recipe Social",
  description: "Discover your next favorite meal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${notoSans.className} antialiased bg-background-light dark:bg-background-dark text-[#151811] dark:text-white font-body`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
