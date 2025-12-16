"use client";

import React from "react";
import { FeedHeader } from "./FeedHeader";
import { SearchBar } from "./SearchBar";
import { CategoryFilter } from "./CategoryFilter";
import { RecipeCard } from "./RecipeCard";
import { BottomNav } from "./BottomNav";
import { Leaf } from "lucide-react";

export function RecipeFeed() {
  return (
    <div className="bg-background min-h-screen flex justify-center font-display">
      <div className="relative flex h-full w-full max-w-md flex-col bg-background shadow-2xl overflow-hidden min-h-screen pb-24">
        {/* Status Bar Placeholder */}
        <div className="h-4 w-full bg-card shrink-0"></div>

        <FeedHeader />

        <div className="sticky top-0 z-20 bg-card">
          <SearchBar />
          <CategoryFilter />
        </div>

        {/* Scrollable Feed Content */}
        <div className="flex flex-col px-4 pt-4 gap-6 overflow-y-auto no-scrollbar">
          <RecipeCard
            title="Avocado Toast with Poached Egg"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCaj8d2XiylUHWqGxgCaTVeIEEDdtsVyK0hvDvOZLpFHAOJSU60TaAHStyOSOUKQQhRrPJ6Y0o12V47vp1-pofHhcSc1nGwGIdnN5rXA-SoH5ksmV0EVv0aygVMzpnvUtgfa2r2Crtd8t9jaBJdwFmRNJiFlVU_5_WuFOem8e7huqp5UH6-q2DNxfLTkpkXUNG8t6P_hmkHz2lduE1UvqB2dwwcUx36ajMtmpm8J0kmo-f0Ib_3hF4o_4Hmbv2Ulkya7Yd7KJKEnUY"
            author={{
              name: "Martha Cooks",
              avatar:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2PRJNxGprbdlQ8QQMXR6dk1yQL5qujuiwT46mc9HBUOgc-h4lYFtXqWeQkR2th_jnR1P6xTQ5neFlW025oPsrN5JPTyWTSqZ65F3zsemaNeCFIutFrIXKE-w6E_HJosKqiulpur9EauWuihOzxYMFMiZ1j3aCq16MoKfEfUz_24lF3KyAAAqUxA4cKzXtMgDBv1QKIYvYP5RzfGJHhoggBMTHWFL-s2S_gaiRBbZ21rxHHCSHgoyBGBgQZFJHjHy0VAAqDkIICo",
            }}
            rating={4.8}
            reviews={120}
            time="15 Mins"
            calories="Easy" // Using this field for 'Easy' in this case as structure is flexible
          />
          <RecipeCard
            title="Creamy Tomato Basil Pasta"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuB6Qj33gbeOLRGDrgDJ_aa4H_XOlco8D0p15tIxEGUaJgxQm5FGmxnuGJDvJ9maGZN3yp43WiBWxuWxQPVGZtPrWTgNyA19fNX15QmSMiZBQ1IIwGxaPkXvVAFQr4dHE15ehNThSkpmf-dH26uMqUCpzZ8BXf0SjDkmj4T4AVTV-oLBg2bzOHEpIfB9lPgU3D0yT8v5CxKGGwe9rk6vCGV65Gws1D27xfxEF-xUN4aOrOksG81_9Q6k09iDtmYMQxlULjRo3jj-Gls"
            author={{
              name: "Gustavo's Kitchen",
              avatar:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDGpyiO3yku_1IAClfbjHOeHNvDQiagh650COF8Kfb8ON4Pt58FiXe3pJEE_C4gxCnjVYuafj1vWBNIv3lxprUucj9OAKIsTx9UG0alPzdYZJH6qb7LHAhOc7xC0TKBBYKNTyHTLs4FwkIU3yYXHjrsTVjpE9XipgDLmfVqWE95biwi2WERhb267ZgV_5H14IUxk82CHtCIB8cK9GHp2oN955el-oK3xDForUBSriY1l-jw2zTPeL45TVSiJt6UyjBf8IYuAFz5hpg",
            }}
            rating={4.9}
            reviews={85}
            time="30 Mins"
            calories="450 Kcal"
          />
          <RecipeCard
            title="Superfood Quinoa Salad"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBambjJKyynOSIzMoHr9A230YJ52tDid1dWpO7HV1Fk3QMf45xPXOGKZYzvgLgGEONjiwdjSdZmLP8NF1tl3Ax7rOPFCPgXJWbjUnDAdsHZn4FPfKmcCleLnYfXVb3osw1RDOisDv_R9xWMOjKSwF-z0jL0zxSZM2ZQ1FUJbILsouS1p-v27cCDNcrelvpChZAT2-0Q72f8iveNWqPdtiWCIVJNxoFJZJGUKTBr3gUkrkuCMTFihRCzZdjExF_qfLyTIeCDtIyz02g"
            author={{
              name: "Sarah Veg",
              avatar:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBOWD_C85Vvynk-xtnGKcbLs8nluM2y0jMe1IMCT861yqs03liDAsYJ15p2WWAEpU7JBVvLZp511O-vC_9lcLqFggkicT7hPiDs74cP-A6tSm7o2J3DhF7BRHSmzxlWy0DZS1N-0m54MnAQPPL4ZIz5LyiAGl1NlWp_kToIpA0vKjawSn6qthvKp_QaaBhDrQhkGXlwTw01uApmHvxFuU18fHRBhONNOpj_bs-EPxbnyQxUImaNTe0mK94jlwJOISeRXiEasFhdy_o",
            }}
            rating={4.7}
            reviews={210}
            time="20 Mins"
            tag="Vegan"
            tagIcon={<Leaf className="w-4 h-4" />}
          />

          <div className="h-8"></div>
        </div>

        <BottomNav />
      </div>
    </div>
  );
}
