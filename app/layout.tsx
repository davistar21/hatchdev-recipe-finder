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
  title: {
    default: "Recipe Social",
    template: "%s | Recipe Social",
  },
  description:
    "Discover your next favorite meal. Join our community of home cooks and food enthusiasts.",
  icons: {
    icon: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍳</text></svg>`,
  },
  openGraph: {
    title: "Recipe Social",
    description: "Discover, share, and save recipes from around the world.",
    url: "https://recipes.hatch.dev",
    siteName: "Recipe Social",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYZDJxAMuPgDVX5OnbQaYTUdfxlxGDfaucZ7tScOqVohj-S9FZrzztCuc3ceruOq2DyaR735SnEFAK-yiLvQ3TzVhBXqzN5fAcvhmraOLGG6lC8IpLoU4SLXe1ZuF561S5SJff3vCtL1ZBmZFONmZwBCOaJoEPMeYtp5e8-4kH8XVov97jWfFxPwlJyEb29onNm6oQecP70-XLRKV5hXdO96YDAUV8sVwC3u3ytp1i8TnkpaV0o1gx-Q3p9NcSFDGKSftFX03YLrY",
        width: 1200,
        height: 630,
        alt: "Recipe Social - Discover Recipes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recipe Social",
    description: "Discover your next favorite meal.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYZDJxAMuPgDVX5OnbQaYTUdfxlxGDfaucZ7tScOqVohj-S9FZrzztCuc3ceruOq2DyaR735SnEFAK-yiLvQ3TzVhBXqzN5fAcvhmraOLGG6lC8IpLoU4SLXe1ZuF561S5SJff3vCtL1ZBmZFONmZwBCOaJoEPMeYtp5e8-4kH8XVov97jWfFxPwlJyEb29onNm6oQecP70-XLRKV5hXdO96YDAUV8sVwC3u3ytp1i8TnkpaV0o1gx-Q3p9NcSFDGKSftFX03YLrY",
    ],
  },
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
