import React from "react";
import Link from "next/link";
import { Utensils } from "lucide-react";

export function WelcomeScreen() {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark text-[#151811] dark:text-white font-display">
      {/* Top Section: Imagery & Carousel */}
      <div className="flex-1 relative flex flex-col">
        {/* Main Hero Image */}
        <div className="relative h-[55%] w-full overflow-hidden rounded-b-[2rem]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbc2GV_4GHy3QW5d_OnHieZD3IEZoEB1gPyvC7e6r89a_k1VgkNqvwt9lX8YdSOokSBi5RrXnNESNyxpSCwWtZBl-KzU2gsXk0oGjP7-jyM-AVnmL2ws_Tpltp5DKrr2x7y6qmoETwdICvA1GLJ3OUDVlNcfqwJls7YHanBgwj4T6wdH4LJnF-zHj-InODCRN-l-mBxTfhZR1XKxTbM6kmDUpN9iOgatzY7_dRoi0eGFZcWp_LoEZ9pc7Ve1F0QgnasvFhxLqsZ14")',
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          {/* Logo / Brand Badge */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
            <Utensils className="text-primary w-5 h-5" />
            <span className="text-sm font-bold tracking-wide uppercase text-black dark:text-white">
              Crave
            </span>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 flex flex-col justify-between pt-6 pb-2">
          {/* Value Prop Carousel / Text */}
          <div className="flex flex-col items-center px-6 text-center">
            <h1 className="text-[#151811] dark:text-white tracking-tight text-[32px] font-extrabold leading-tight pb-3">
              Taste the World
            </h1>
            <p className="text-[#151811]/70 dark:text-white/70 text-base font-medium leading-relaxed max-w-[280px]">
              Join the largest community of home cooks and discover recipes
              daily.
            </p>

            {/* Page Indicators */}
            <div className="flex flex-row items-center justify-center gap-2 pt-6 pb-4">
              <div className="h-2 w-8 rounded-full bg-primary transition-all duration-300"></div>
              <div className="h-2 w-2 rounded-full bg-[#e1e6db] dark:bg-white/20 transition-all duration-300"></div>
              <div className="h-2 w-2 rounded-full bg-[#e1e6db] dark:bg-white/20 transition-all duration-300"></div>
            </div>

            {/* Mini Feature Preview (Story Carousel style) */}
            <div className="w-full pt-4 overflow-x-auto hide-scrollbar pb-2 no-scrollbar">
              <div className="flex flex-row items-start justify-center gap-4 min-w-max px-2">
                <div className="flex flex-col items-center gap-2 w-20">
                  <div
                    className="w-16 h-16 bg-center bg-no-repeat bg-cover rounded-full ring-2 ring-primary p-0.5"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCel45LveNqcboQc5M2wzPT_oMEAWDwVrqG-T7Ng87IMAYM9hDPsOuIeYEey7989PtnIbV8m1IWLHy3bXdeliSjlU7F2wrvoxIaDhoCGP9FQ0mvhbz_qoH5qDEM5t5nMudzki1DA-Q0F2L4ODVUZfnT4zYPIpm0dNIJL25weebBZIJwAnKsjA8sxp1HPUvRlT_IpJdZmpoRuVa9tGOCuNJz5umr23TisWwxFvlnAOHOyeIfUboSoiN4rjYizP8tz6Vr7HTzIFRfbi4")',
                    }}
                  >
                    <div className="w-full h-full rounded-full border-2 border-white dark:border-background-dark"></div>
                  </div>
                  <span className="text-xs font-semibold text-center opacity-80">
                    Discover
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 w-20">
                  <div
                    className="w-16 h-16 bg-center bg-no-repeat bg-cover rounded-full ring-2 ring-transparent p-0.5 grayscale hover:grayscale-0 transition-all"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAc8oD8pNd__d416UTZf_hJa9vNTDZvi6dyJew-lAxw4H_u9r-oSN3Jloy3t_dle1V2BK4JluC3FoVSBaZsbFnMfjjAYKAHifuLGfwE7YWD-F3N8VFpVwuSpAP5lg04zSUM3aJrLBEyFviAZMJp1m5-OBOT3nXr5tIE1PbuKZ_VFSCUKilBvbSHtJg2O5v9_jnhL8CGVuknAFdr46zyHahFbFMhx-IkvHrueyUGF5DYA0bZENPKC5VTEdpZYZKK00BWWSa03SQjTtk")',
                    }}
                  ></div>
                  <span className="text-xs font-semibold text-center opacity-50">
                    Cook
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 w-20">
                  <div
                    className="w-16 h-16 bg-center bg-no-repeat bg-cover rounded-full ring-2 ring-transparent p-0.5 grayscale hover:grayscale-0 transition-all"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPjkbm19ya5Jk131D_PrmLf3byZ-UxC1juXRou7fRoEtj5MeQul4zL0MlvtLXg-KJQT_mgVZzcPCbkW1Jia5N0HPLgUZDuFqYRURDIMF_37J7H5rWUmCnrIz_BC9TwXUV7JpZmn1FNhxxE2S-CxVT2xpHfUnf79rlIRzLepbADOj5lapmS4d9h1G8_6eMQp_heq7pvbIWWKK0WyoFcY9seDJCVb7KbczzpToOWWxLGEzvaAUVnadKwnSuqJQW72IQlJ0DrjK8WxWg")',
                    }}
                  ></div>
                  <span className="text-xs font-semibold text-center opacity-50">
                    Share
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions Section */}
      <div className="w-full px-6 pb-8 pt-2 bg-background-light dark:bg-background-dark">
        <div className="flex flex-col gap-3">
          {/* Primary CTA */}
          <Link
            href="/signup"
            className="flex w-full cursor-pointer items-center justify-center rounded-xl h-14 px-5 bg-primary hover:bg-[#82d611] transition-colors text-[#1a2210] text-base font-bold tracking-wide shadow-lg shadow-primary/20"
          >
            <span className="truncate">Create Account</span>
          </Link>
          {/* Secondary CTA */}
          <Link
            href="/login"
            className="flex w-full cursor-pointer items-center justify-center rounded-xl h-14 px-5 bg-transparent border border-[#151811]/10 dark:border-white/20 text-[#151811] dark:text-white text-base font-bold tracking-wide hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <span className="truncate">Log In</span>
          </Link>
        </div>

        {/* Social Login Divider */}
        <div className="relative py-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-background-light dark:bg-background-dark text-gray-500 text-xs">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <button className="h-12 w-12 flex items-center justify-center rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-transparent shadow-sm hover:scale-105 transition-transform">
            <img
              alt="Google"
              className="h-6 w-6"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsUNrqbIdwlF38Y-ARTjLp6mcVWcmal9x0PhOzZA7hvAcDCRBRNEu5hfh19M3i4Q0gIFt71QmQjQHOHFajiMaOsRyPiLzfVIZ-s59LkMpUyg5RiZ9vmUmy3gP3m4qDa2laqDLGeUof7f8HBk6gDj_IQZNXw8J6x6wf0G8HCuGvmfjFXLBSHioXPXQYNZoff3a34nI-Uez9HpDTnbVw7fixVrzytftX812xvR-nVLnPFI7m7oZ9n7-5UPaseEXJ_uBnoRJGh_927kE"
            />
          </button>
          <button className="h-12 w-12 flex items-center justify-center rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-transparent shadow-sm hover:scale-105 transition-transform">
            <img
              alt="Apple"
              className="h-6 w-6 dark:invert"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC42zY1vStDi_gFahJR4PIZ2xO_41B5HGvXFnvoaOz0WsxrXlt3T8CydKx9ZAij7UlaHBpB7b6aCkIZNBuhc3yAHEX9q2zjRNa2y--hXiH_Q9DfxxFjHmalEULBMpG5v1jVyKh4Wl5C3dzdpk8cgQVdeQbobRrliot-fTYe1dpTNlqO8CL_mRwa1PrOL4uLxd18q6DkbUm2RflacqeYO4prjLbg96Y96w5NNRZPOWkPGZOcMCMNZPP4KmNiUarNp5hzac2lsd-Np04"
            />
          </button>
          <button className="h-12 w-12 flex items-center justify-center rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-transparent shadow-sm hover:scale-105 transition-transform">
            <img
              alt="Facebook"
              className="h-6 w-6"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATTX5HFxY9UILjmRhiMJaXlvCYIWjyZa_am-HPiNZYEHyCXjfgiTQb6OoyH4WmgvsCOfD5_fybWGtsAy4DfglH4FstGQFu1jzBSOC9EpmpJqMvNFijHLd8pOGF7FN-DVucIDohLr34aegAmM0_CQq6pOzCAnjV_AUAXxFGrSuAcn3ySEaXvxrrp2F7qwDdYcMyUuSnM2uRbdCe4NjnBj4tf4NmramD6OKEwhdpioe6LPzIAS2BtUaPCUcipxzMjZuRwkx9uAwgcro"
            />
          </button>
        </div>

        {/* Terms */}
        <p className="mt-6 text-center text-[10px] text-gray-400 dark:text-gray-500 leading-tight px-8">
          By continuing, you agree to our{" "}
          <Link
            href="#"
            className="underline decoration-gray-400 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="#"
            className="underline decoration-gray-400 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
