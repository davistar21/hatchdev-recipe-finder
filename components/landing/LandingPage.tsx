"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Utensils,
  Search,
  ChefHat,
  Users,
  ArrowRight,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-[#151811] dark:text-white font-display overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Utensils className="text-black w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              RecipeSocial
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden sm:flex text-sm font-semibold hover:text-primary transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="bg-primary hover:bg-[#86db11] text-black px-5 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Star className="w-3 h-3 fill-current" />
              <span>The #1 Recipe Community</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Taste the{" "}
              <span className="text-primary underline decoration-4 decoration-black/10 dark:decoration-white/20 underline-offset-4">
                World
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Join the largest community of home cooks. Discover new recipes,
              share your culinary masterpieces, and get inspired daily.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                href="/signup"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-black rounded-xl font-bold text-lg hover:bg-[#86db11] transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/20"
              >
                <span>Start Cooking</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/welcome"
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-white/10 text-black dark:text-white rounded-xl font-bold text-lg hover:bg-gray-50 dark:hover:bg-white/20 border border-gray-200 dark:border-white/10 transition-all flex items-center justify-center"
              >
                Explore Mobile View
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] w-full"
          >
            <div className="relative w-full aspect-square lg:h-full rounded-[2.5rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 outline outline-8 outline-white/20 dark:outline-black/20">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbc2GV_4GHy3QW5d_OnHieZD3IEZoEB1gPyvC7e6r89a_k1VgkNqvwt9lX8YdSOokSBi5RrXnNESNyxpSCwWtZBl-KzU2gsXk0oGjP7-jyM-AVnmL2ws_Tpltp5DKrr2x7y6qmoETwdICvA1GLJ3OUDVlNcfqwJls7YHanBgwj4T6wdH4LJnF-zHj-InODCRN-l-mBxTfhZR1XKxTbM6kmDUpN9iOgatzY7_dRoi0eGFZcWp_LoEZ9pc7Ve1F0QgnasvFhxLqsZ14")',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-8 left-8 bg-white/90 dark:bg-black/80 backdrop-blur-md p-4 rounded-2xl shadow-lg max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <ChefHat size={16} />
                  </div>
                  <span className="text-sm font-bold">Chef's Choice</span>
                </div>
                <p className="text-xs text-gray-500 font-medium">
                  "Best salad I've ever made!"
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-[#151b0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
              Everything you need to cook better
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              From finding the perfect recipe to sharing your own creations,
              we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8 text-primary" />,
                title: "Discover",
                description:
                  "Find recipes based on ingredients you already have or moods you're in.",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCel45LveNqcboQc5M2wzPT_oMEAWDwVrqG-T7Ng87IMAYM9hDPsOuIeYEey7989PtnIbV8m1IWLHy3bXdeliSjlU7F2wrvoxIaDhoCGP9FQ0mvhbz_qoH5qDEM5t5nMudzki1DA-Q0F2L4ODVUZfnT4zYPIpm0dNIJL25weebBZIJwAnKsjA8sxp1HPUvRlT_IpJdZmpoRuVa9tGOCuNJz5umr23TisWwxFvlnAOHOyeIfUboSoiN4rjYizP8tz6Vr7HTzIFRfbi4",
              },
              {
                icon: <ChefHat className="w-8 h-8 text-primary" />,
                title: "Cook",
                description:
                  "Follow step-by-step instructions with interactive checklists and timers.",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAc8oD8pNd__d416UTZf_hJa9vNTDZvi6dyJew-lAxw4H_u9r-oSN3Jloy3t_dle1V2BK4JluC3FoVSBaZsbFnMfjjAYKAHifuLGfwE7YWD-F3N8VFpVwuSpAP5lg04zSUM3aJrLBEyFviAZMJp1m5-OBOT3nXr5tIE1PbuKZ_VFSCUKilBvbSHtJg2O5v9_jnhL8CGVuknAFdr46zyHahFbFMhx-IkvHrueyUGF5DYA0bZENPKC5VTEdpZYZKK00BWWSa03SQjTtk",
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Share",
                description:
                  "Build your profile, save favorites, and share your culinary journey.",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBPjkbm19ya5Jk131D_PrmLf3byZ-UxC1juXRou7fRoEtj5MeQul4zL0MlvtLXg-KJQT_mgVZzcPCbkW1Jia5N0HPLgUZDuFqYRURDIMF_37J7H5rWUmCnrIz_BC9TwXUV7JpZmn1FNhxxE2S-CxVT2xpHfUnf79rlIRzLepbADOj5lapmS4d9h1G8_6eMQp_heq7pvbIWWKK0WyoFcY9seDJCVb7KbczzpToOWWxLGEzvaAUVnadKwnSuqJQW72IQlJ0DrjK8WxWg",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative rounded-3xl overflow-hidden bg-background-light dark:bg-background-dark border-2 border-transparent hover:border-primary/50 transition-all p-6 shadow-xl"
              >
                <div className="flex flex-col gap-4 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full opacity-10 blur-3xl bg-primary"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-black/5 dark:border-white/5 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Utensils className="text-black w-4 h-4" />
            </div>
            <span className="font-bold text-lg">RecipeSocial</span>
          </div>
          <p className="text-sm text-gray-400">
            © 2024 Recipe Social. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
