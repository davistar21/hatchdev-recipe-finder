"use client";

import React from "react";
import Link from "next/link";
import { Utensils, Mail, EyeOff, ArrowRight } from "lucide-react";
import { SocialLoginButtons } from "./SocialLoginButtons";

interface AuthFormProps {
  mode: "login" | "signup";
}

export function AuthForm({ mode }: AuthFormProps) {
  return (
    <div className="w-full max-w-md bg-background flex flex-col min-h-screen relative shadow-2xl overflow-hidden mx-auto">
      {/* Header Image Section */}
      <div className="relative w-full h-72 @container group/header">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30 z-10"></div>
        <div
          className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuChxByArG9HRg2hEmcAMS1x7ofoUn7LR_UNjhzrbvpD4UiW3jCoa8ZuhJpHvU79ZYLdGq14RLhajBo8WcAtw3ff1Gfpss-zj52WNBIjxt4a4EFdTGb-q9X9ukOcCMiWZ99xVXQWZB30utV9SgJzAUinFAmsm6hv2nHtIFj6Y9xeb68OkBsfIyT303WflCQu3oA_WvpNeW614vbZvpdqMLzZFAEnEYfOiRhYBYCw1c6aHFVPgleEChfsxknTHQabpEPpyvtuhgereuE")',
          }}
        />
        {/* Logo/Brand Overlay */}
        <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
            <Utensils className="text-primary-foreground text-[20px] font-bold w-5 h-5" />
          </div>
          <span className="text-white font-bold text-lg tracking-wide drop-shadow-md">
            RecipeSocial
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 px-6 -mt-8 relative z-20">
        {/* Headline */}
        <div className="bg-background pt-6 pb-2 rounded-t-3xl">
          <h1 className="text-foreground tracking-tight text-[32px] font-extrabold leading-[1.1] mb-6">
            Discover your next <br />
            <span className="text-primary decoration-foreground underline decoration-2 underline-offset-4">
              favorite meal.
            </span>
          </h1>

          {/* Segmented Control (Tabs) */}
          <div className="flex p-1 bg-muted rounded-xl mb-8">
            <Link href="/login" className="flex-1 cursor-pointer">
              <div
                className={`flex items-center justify-center py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  mode === "login"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground"
                }`}
              >
                Log In
              </div>
            </Link>
            <Link href="/signup" className="flex-1 cursor-pointer">
              <div
                className={`flex items-center justify-center py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  mode === "signup"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground"
                }`}
              >
                Sign Up
              </div>
            </Link>
          </div>

          {/* Form Inputs */}
          <form className="flex flex-col gap-5">
            {/* Email Field */}
            <div className="group/input">
              <label className="block text-sm font-medium text-foreground/80 mb-1.5 ml-1">
                Email Address
              </label>
              <div className="flex items-center w-full rounded-xl bg-muted/50 border-2 border-transparent focus-within:border-primary/50 transition-colors shadow-sm overflow-hidden h-14">
                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full bg-transparent border-none text-foreground placeholder:text-muted-foreground focus:ring-0 px-4 h-full text-base outline-none"
                />
                <div className="pr-4 text-muted-foreground group-focus-within/input:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div className="group/input">
              <label className="block text-sm font-medium text-foreground/80 mb-1.5 ml-1">
                Password
              </label>
              <div className="flex items-center w-full rounded-xl bg-muted/50 border-2 border-transparent focus-within:border-primary/50 transition-colors shadow-sm overflow-hidden h-14">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-transparent border-none text-foreground placeholder:text-muted-foreground focus:ring-0 px-4 h-full text-base outline-none"
                />
                <button
                  type="button"
                  className="pr-4 text-muted-foreground hover:text-foreground transition-colors focus:outline-none"
                >
                  <EyeOff className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            {mode === "login" && (
              <div className="flex justify-end">
                <Link
                  href="#"
                  className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>
            )}

            {/* Primary Action Button */}
            <button
              type="button"
              className="w-full bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all h-14 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 mt-2"
            >
              <span className="text-primary-foreground font-bold text-lg">
                {mode === "login" ? "Log In" : "Get Cooking"}
              </span>
              <ArrowRight className="ml-2 text-primary-foreground font-bold w-5 h-5" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex py-8 items-center">
            <div className="flex-grow border-t border-border"></div>
            <span className="flex-shrink-0 mx-4 text-muted-foreground text-xs font-medium uppercase tracking-wider">
              Or continue with
            </span>
            <div className="flex-grow border-t border-border"></div>
          </div>

          <SocialLoginButtons />

          {/* Footer Terms */}
          <p className="text-center text-xs text-muted-foreground pb-8 px-4 leading-relaxed">
            By continuing, you agree to RecipeSocial&apos;s <br />
            <Link href="#" className="underline hover:text-foreground">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline hover:text-foreground">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
