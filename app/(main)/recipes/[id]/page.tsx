import { RecipeDetails } from "@/components/recipe/RecipeDetails";
import { MOCK_RECIPES } from "@/lib/mockData";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function RecipePage({ params }: PageProps) {
  // Await the params object before accessing properties
  const resolvedParams = await params;
  const recipe = MOCK_RECIPES.find((r) => r.id === resolvedParams.id);

  if (!recipe) {
    notFound();
  }

  return <RecipeDetails recipe={recipe} />;
}
