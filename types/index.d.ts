export {};

declare global {
  interface Chef {
    id: string;
    name: string;
    avatar: string;
    isPro: boolean;
  }

  interface Ingredient {
    name: string;
    amount: string;
  }

  interface Instruction {
    step: number;
    title: string;
    description: string;
    image?: string;
  }

  interface Review {
    id: string;
    userName: string;
    userAvatar: string;
    rating: number;
    comment: string;
    date: string;
  }

  interface Recipe {
    id: string;
    title: string;
    image: string;
    chef: Chef;
    rating: number;
    reviewsCount: number;
    time: string;
    calories: string;
    servings: number;
    ingredients: Ingredient[];
    instructions: Instruction[];
    reviews: Review[];
    isTopRated?: boolean;
  }

  interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    bio?: string;
    followersCount: number;
    followingCount: number;
    recipesCount: number;
  }

  interface BackendUser {
    id: string;
    email: string;
    username: string;
    profile_pic: string | null;
    bio: string | null;
    cooking_skill_level: string | null;
  }

  interface AuthResponseData extends BackendUser {
    token: string;
  }
  interface AuthResponse {
    success: boolean;
    message: string;
    code: number;
    data: AuthResponseData;
  }

  interface Pricing {
    instacart: number;
    amazon: number;
  }

  interface Recommendation {
    id: string;
    title: string;
    description?: string;
  }

  interface CreateReview {
    comment: string;
    rating?: number;
  }
}
