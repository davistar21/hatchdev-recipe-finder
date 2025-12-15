# Recipe Social Platform (HatchDev Recipe Finder)

A social platform for home cooks to discover, share, and save recipes. This project is built with Next.js, Tailwind CSS, and shadcn/ui.

## 🚀 Project Vision

The goal is to build a vibrant community for food enthusiasts where they can:

- **Discover** new recipes with advanced search and filtering.
- **Share** their own culinary creations.
- **Save** favorites into personalized collections.
- **Engage** with the community through reviews and ratings.
- **Plan** meals with ingredient price tracking and checklists.
- **Get Inspired** by AI-powered mood-based recommendations.

## 🛠️ Technical Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Icons:** [Lucide React](https://lucide.dev)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **API Client:** Axios/Fetch

## ✨ Key Features

1.  **Recipe Management:** Create, view, edit, and delete detailed recipes with ingredients and instructions.
2.  **Advanced Search:** Filter by cuisine, difficulty, dietary restrictions, and rating.
3.  **Community:** User profiles, reviews, and ratings.
4.  **Collections:** Save and organize recipes.
5.  **Interactive Tools:** Ingredient checklists with serving adjustments.
6.  **Price Comparison:** Compare ingredient prices across different suppliers.
7.  **AI Recommendations:** Personalized recipe suggestions based on your mood.

## 📂 Folder Structure

The project follows a feature-based and separation-of-concerns architecture:

```
app/                 # Next.js App Router (Pages & Layouts)
├── (auth)/          # Authentication routes
├── (main)/          # Main application routes
│   ├── recipes/     # Recipe details, creation, and listing
│   ├── collections/ # User collections
│   ├── profile/     # User profile
│   └── ...
components/          # Reusable UI components
├── ui/              # shadcn/ui primitives
├── common/          # Global components (Header, Footer)
├── recipes/         # Recipe-specific components
└── ...
lib/                 # Core logic and utilities
├── api/             # API clients
├── stores/          # Zustand state stores
└── utils/           # Helper functions
types/               # TypeScript definitions
```

## ⚡ Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/davistar21/hatchdev-recipe-finder.git
    cd hatchdev-recipe-finder
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Open the app:**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 License

This project is for educational and development purposes.
