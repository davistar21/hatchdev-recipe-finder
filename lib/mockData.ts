// Types are globally declared in types/index.d.ts

export const MOCK_RECIPES: Recipe[] = [
  {
    id: "1",
    title: "Creamy Avocado Lime Pasta",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYZDJxAMuPgDVX5OnbQaYTUdfxlxGDfaucZ7tScOqVohj-S9FZrzztCuc3ceruOq2DyaR735SnEFAK-yiLvQ3TzVhBXqzN5fAcvhmraOLGG6lC8IpLoU4SLXe1ZuF561S5SJff3vCtL1ZBmZFONmZwBCOaJoEPMeYtp5e8-4kH8XVov97jWfFxPwlJyEb29onNm6oQecP70-XLRKV5hXdO96YDAUV8sVwC3u3ytp1i8TnkpaV0o1gx-Q3p9NcSFDGKSftFX03YLrY",
    chef: {
      id: "chef1",
      name: "Chef Mario",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCcQ8eft21MXpofYD38OBk28qCy0l-oG_k08UqXHuohGNSs6REGzXYoU71ScZGwIXuHg5SB2QF4DZ06RTcoMqUn8LGChGMPyG2UpYQbC-v-AOaXrofTLKMAk80HPNtNGcjp1peZr072b_7hVpHjpYAhc2c5n8pNnfzY-4afT5KX-SCEOh_uc_kRQvi7j-Rz3pRUN4TRUi997xJJvDyJiH8a4rRkQ2ibE_n0-II3vAYtxe4XOXePol5Io1m5Uek66By1yweVeje9sVM",
      isPro: true,
    },
    rating: 4.8,
    reviewsCount: 124,
    time: "25 mins",
    calories: "420 kcal",
    servings: 2,
    isTopRated: true,
    ingredients: [
      { name: "Ripe Avocados", amount: "2 pcs" },
      { name: "Whole Wheat Pasta", amount: "200g" },
      { name: "Fresh Lime Juice", amount: "2 tbsp" },
      { name: "Garlic Cloves", amount: "2 pcs" },
      { name: "Olive Oil", amount: "1 tbsp" },
    ],
    instructions: [
      {
        step: 1,
        title: "Boil the Pasta",
        description:
          "Bring a large pot of salted water to a boil. Add the pasta and cook according to package instructions until al dente.",
      },
      {
        step: 2,
        title: "Prepare the Sauce",
        description:
          "While pasta cooks, combine avocado, lime juice, garlic, olive oil, spinach, basil, and pecans in a food processor.",
      },
      {
        step: 3,
        title: "Combine & Serve",
        description:
          "Drain pasta and return to pot. Pour the avocado sauce over the pasta and toss until fully coated. Season with salt and pepper.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCmtCb3QML_REuJ8TM4lfLat8S4lRd0cEILMUMRwEDM4eXXW6F-pQUIfUvl3tCs424RaCQhdZdVFiAqGxpYiTDGeFs1FuMYiN-XVdxMRgx6upGk3esOrxp7ZX7BOb3eX-YFAXQ-08re7uLUqYmdqFdFJKtLgXWjsd3Q4qLAjYYo1XqYVTu3mGys06LpXC8O3uqsMubVUy2F4mF0MdRhhaKK5ZaArO55aTCP5LcmC48slZprxEIIqlguhOuKofJuW2_BlwytxAQ0DzM",
      },
    ],
    reviews: [
      {
        id: "r1",
        userName: "Sarah M.",
        userAvatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAVW3moqUNUyfbf02R9hPfE7kyWz0k_4_8cq3FrWhS88lEPIsJWbi9HbDngjaEb6wxmtzNY8jQOBaPxk7-vO5NC4YGNOEXFBvF4WMZM6RxzmpR81auceyXU48Xcsr_hPixcRxqwYXTnZw_VFkvx0o5qkNSpg8mTHmZDj-Z1rLzGwjYhxwTvaPpust_acX8JkIm69P2Q6LgHmnIoNVNSz0SlMRQCDILrTJgSD3vo3cEYAnqtfKQbzRUbhTjXY1jcfy1-PCB5ra7y5tc",
        rating: 5,
        comment:
          "Absolutely delicious! The lime really cuts through the richness of the avocado. My kids loved it too, which is a rare win!",
        date: "2024-03-15",
      },
    ],
  },
  {
    id: "2",
    title: "Spicy Thai Basil Chicken",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCaj8d2XiylUHWqGxgCaTVeIEEDdtsVyK0hvDvOZLpFHAOJSU60TaAHStyOSOUKQQhRrPJ6Y0o12V47vp1-pofHhcSc1nGwGIdnN5rXA-SoH5ksmV0EVv0aygVMzpnvUtgfa2r2Crtd8t9jaBJdwFmRNJiFlVU_5_WuFOem8e7huqp5UH6-q2DNxfLTkpkXUNG8t6P_hmkHz2lduE1UvqB2dwwcUx36ajMtmpm8J0kmo-f0Ib_3hF4o_4Hmbv2Ulkya7Yd7KJKEnUY",
    chef: {
      id: "chef2",
      name: "Chef Nalini",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2PRJNxGprbdlQ8QQMXR6dk1yQL5qujuiwT46mc9HBUOgc-h4lYFtXqWeQkR2th_jnR1P6xTQ5neFlW025oPsrN5JPTyWTSqZ65F3zsemaNeCFIutFrIXKE-w6E_HJosKqiulpur9EauWuihOzxYMFMiZ1j3aCq16MoKfEfUz_24lF3KyAAAqUxA4cKzXtMgDBv1QKIYvYP5RzfGJHhoggBMTHWFL-s2S_gaiRBbZ21rxHHCSHgoyBGBgQZFJHjHy0VAAqDkIICo",
      isPro: false,
    },
    rating: 4.9,
    reviewsCount: 89,
    time: "20 mins",
    calories: "380 kcal",
    servings: 3,
    ingredients: [
      { name: "Chicken Breast", amount: "500g" },
      { name: "Thai Basil", amount: "1 cup" },
      { name: "Bird's Eye Chili", amount: "4 pcs" },
      { name: "Soy Sauce", amount: "2 tbsp" },
    ],
    instructions: [
      {
        step: 1,
        title: "Prep Ingredients",
        description:
          "Mince garlic and chili. Slice chicken into bite-sized pieces.",
      },
      {
        step: 2,
        title: "Stir Fry",
        description:
          "Heat oil in wok. Fry garlic and chili. Add chicken and stir fry until cooked.",
      },
    ],
    reviews: [],
  },
];


// Creating a larger list by reapeating the existing recipes
export const PAGINATED_RECIPES = [
  ...MOCK_RECIPES,
  ...MOCK_RECIPES.map (r => ({ ...r, id:r.id + "_copy1"})),
  ...MOCK_RECIPES.map (r => ({ ...r, id:r.id + "_copy2"})),
  ...MOCK_RECIPES.map (r => ({ ...r, id:r.id + "_copy3"})),
  ...MOCK_RECIPES.map (r => ({ ...r, id:r.id + "_copy4"})),
]