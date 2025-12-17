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

  interface AuthResponse {
    user: User;
    token: string;
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

