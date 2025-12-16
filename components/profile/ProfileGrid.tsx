"use client";

import React from "react";
import Image from "next/image";
import { Grid, Bookmark, Clock, Heart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CREATED_RECIPES = [
  {
    id: 1,
    title: "Spicy Miso Ramen",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdCBiASKdrVCDIW14CEzz1lS_WB9dRglAzhCZXELBQ1DHij-6md_M-ulAwKiT93P4VRnsC-a7K_eIdeMwzyJH5T0zpMHP97aEQepY9ipT7QsHMk1zH4UMANihBUYuhbGn7gXf5O7-3TZdImkcTxm3kUHvBmb4Bz358NkeSk_4or_E8nbRM2-aIztEiEsAruyUcYWO9WyWNaG84xb7ErdF1WIsUS99BTU6DkNvMPNu_E1w7603-H1VZvpEIUW08D5rnHLNWSWFqXec",
    time: "30m",
    likes: 128,
  },
  {
    id: 2,
    title: "Sourdough Starter",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAn0IYQd5MxCZIfHpmDMB45jq4PnI_sx1LhIZaOLP9Tq4gSN85G0WyFCdWMYr4aYmoF3DZR9GDe6THsBXpyG_aPH9jL2kEWkaw7p3BN2GpO0UYzWgsV3tJYgwK26YVSRKBT1ZZFwh8kNjlRyErr0wYy2JBt5aZYS6M9eRCsKPxoq-DHl6RF0VeubpU0xRhy6BTymo5Ufg9d7zlZ-Xw1IPP0ueL6aneeubuwUrnSkspCg3vxz9tv3IAJ3PHj7vNE6Cybxu1n342Ovek",
    time: "24h",
    likes: "2.4k",
  },
  {
    id: 3,
    title: "Avocado Twist",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5PlvyfRZ1nlbSZSupBPNlNsDLB2RqqJYdCTuVEVY8qgm-slwcGARnzCzFEO_sqrFZwCN20qvSAey4wyoOYKivgj3WfyZEsek1CwVhMJNG8IZv4W4HtUGgVMwxFogqV6-D2s1tB8yxM6GV893B2aHx0jqH0Lo7ppcrq8vTAqkNn8m4YEyh8-1bAHR8rLQ81gQl7ESVYX7GP_DJrHPHd2cIdnyFSi44dEl54H1ee4mUNgB3-QDRVnGgKxUzKgvHtCBp515hLVllgBA",
    time: "15m",
    likes: 842,
  },
  {
    id: 4,
    title: "Berry Bowl",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlrWqIeMsnB3myxRvSP39_iH_8GzOCE1d-Yoja8tGn1KmNhu45nW_2MwQuHLnqgysTMue6Sy6tVGyBV6VvBqrl_oo2XzIh6_8f2cwB4_aT89czENrZOBzwrEQlNITMLYsE4ras0TqgFR8gMQF4tA7htoVkrgCxCgHWyqBfz-1FawxywtaisAe0vwjEtBfmQe5tJcbUfWM-ojOQs_ScINIkTSC4Pt-4Si0uTxhpQBJMV86PmdCMmzZvNr2d_tmMIaMpRm-CXiAvexg",
    time: "10m",
    likes: 550,
  },
  {
    id: 5,
    title: "Fluffy Pancakes",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCO7BiX22B5VZOfHTEwxUSvU8DGHZ-19azQ-vHR0M4BB77YiMFt5TkvYTHFrFJ4g_1ovGBL_DNw71YI-Nx-HbVXqG46N-18Q4p3WZ4BYnhY_PLa49bZfad-eNiBR8xkHIel-oH4KuEfDRI-VozTUUGJwkaa6Yw1mUiJs9ouj6hItzTg68zL5vbKcX9i330htuE5uzmW7rglIaYWUQLOYjRWx4WQ44uTeab_dBfy2pavbD43xPbWeRH1PXjTDiVAEkzpfnrhqkBY80o",
    time: "45m",
    likes: "3.1k",
  },
  {
    id: 6,
    title: "Summer Salad",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBxT8hYQTDXJDrLPNqsD1R9I5jKfq94KBhw3GyET71pP9k0HnA_ebffR2xoZ4PI7mDtiLCgxKR6_C7KbqsBjMqv8cCk_1EziyytPlLPVXPKVXP0qIKPaiWYo4acorTWzuyCAUhOhorCfchG8BHY_h-SAJHC5nRH8iXbKufWu7yrCqRYti0dsBWlf0DvKqnYCITUVUmx2T2atmSlxH1vUZ-EK1qmoI2qKCiyPeDqQiABxU3cC1BUUDPdor9hQXQ2DOKg-SBRBFO-kLc",
    time: "20m",
    likes: 420,
  },
];

export function ProfileGrid() {
  return (
    <div className="w-full bg-background min-h-[500px]">
      <Tabs defaultValue="created" className="w-full">
        <div className="sticky top-0 z-20 bg-background shadow-sm">
          <TabsList className="w-full flex h-auto p-0 bg-transparent border-b border-border rounded-none">
            <TabsTrigger
              value="created"
              className="flex-1 flex flex-col items-center justify-center gap-2 py-3 border-b-[3px] border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent rounded-none transition-all"
            >
              <Grid className="w-5 h-5" />
              <span className="text-sm font-bold">Created</span>
            </TabsTrigger>
            <TabsTrigger
              value="saved"
              className="flex-1 flex flex-col items-center justify-center gap-2 py-3 border-b-[3px] border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent rounded-none transition-all text-muted-foreground data-[state=active]:text-foreground"
            >
              <Bookmark className="w-5 h-5" />
              <span className="text-sm font-bold">Saved</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="created" className="mt-0 p-4 pb-24">
          <div className="grid grid-cols-2 gap-3">
            {CREATED_RECIPES.map((recipe) => (
              <div
                key={recipe.id}
                className="flex flex-col gap-2 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-muted">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-white" />
                    <span className="text-white text-[10px] font-bold">
                      {recipe.time}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-foreground text-sm font-bold leading-tight mb-0.5">
                    {recipe.title}
                  </p>
                  <div className="flex items-center gap-1">
                    <Heart className="w-[14px] h-[14px] text-primary fill-current" />
                    <span className="text-muted-foreground text-xs">
                      {recipe.likes}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved" className="mt-0 p-4">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Bookmark className="w-12 h-12 text-muted-foreground mb-4 opacity-50" />
            <h3 className="text-lg font-bold text-foreground">
              No saved recipes
            </h3>
            <p className="text-muted-foreground text-sm">
              Recipes you save will appear here.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
