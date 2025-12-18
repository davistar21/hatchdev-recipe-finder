import { redirect } from "next/navigation";

export default function Home() {
  // redirect("/landing");
  return(
    <main>
      <RecipeFeed />
    </main>
  )
}
import { RecipeFeed } from "@/components/feed/RecipeFeed";
// import { CollectionsTab } from "@/components/profile/CollectionsTab"; // Import the new tab

// export default function Home() {
//   return (
//     <main className="flex justify-center min-h-screen bg-gray-50">
//        {/* 1. Your Normal Feed (Hidden for now, or keep it if you want) */}
//        {/* <RecipeFeed /> */}

//        {/* 2. TEST: The Collections Tab */}
//        <div className="w-full max-w-md bg-white min-h-screen p-4 shadow-xl">
//           <CollectionsTab />
//        </div>
//     </main>
//   );
// }