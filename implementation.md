# 2-Day Sprint Plan: Recipe Social App Completion

**Goal**: Complete all functional requirements, connect frontend to backend, and ensure a polished, production-ready application by the end of Day 2.

**Team**:

- **Lead**: Eyitayo (Overseer, Review, Integration)
- **FE 1 (Ibraheem)**: Auth, User Profile, Settings
- **FE 2 (Tomilade)**: Recipe CRUD (Create, Read, Update, Delete)
- **FE 3 (Mayor-king)**: Search, Filtering, Collections
- **FE 4 (Precious)**: Reviews, Ingredient Checklist, Pricing/AI

---

## Technical Guidelines (Standardizing the Codebase)

### 1. State Management (Zustand)

We will use **Zustand** for global state. Create the following stores in `lib/stores/`:

- `useAuthStore.ts`: User session, login/register status, token.
- `useRecipeStore.ts`: Active recipe data, creation form state (drafts).
- `useSearchStore.ts`: Search query, active filters, search results.
- `useInteractionStore.ts`: Reviews, checklist state, favorites.

### 2. API Integration

- Use a central Axios instance at `lib/api/axios.ts`.
- **Do not** hardcode URLs. Use `process.env.NEXT_PUBLIC_API_URL`.
- Handle errors globally (e.g., toast notifications) in the Axios interceptors if possible, or use try/catch blocks in store actions.
- **Pattern**: Components call Store Actions -> Store Actions call API -> Store updates state.

### 3. UI Components

- Continue using `shadcn/ui` for all new interactive elements.
- Ensure **responsive design**: Check mobile view for every feature.
- **Accessibility**: All buttons must have `aria-label` if they are icon-only. Images must have `alt` text.

---

## Day 1: Foundation & Connectivity

### 🌞 Morning: State & API Setup

**Eyitayo (Lead):**

- [ ] Set up `lib/api/axios.ts` with interceptors for JWT injection.
- [ ] Create skeletons for `useAuthStore`, `useRecipeStore`, `useSearchStore`.
- [ ] Define shared Types in `types/index.d.ts` if missing (e.g., `User`, `AuthResponse`).

**Ibraheem (Auth & Profile):**

- [ ] Implement `useAuthStore`: `login`, `register`, `logout` actions calling API.
- [ ] Connect `WelcomeScreen`, `role/login`, `role/signup` to `useAuthStore`.
- [ ] **Deliverable**: User can log in/sign up and get a JWT stored in localStorage/cookies.

**Tomilade (Recipe):**

- [ ] Implement `useRecipeStore`: Actions for `createRecipe`, `fetchRecipe`.
- [ ] Connect `IngredientEditor` and `InstructionEditor` to the store (replace local state).
- [ ] **Deliverable**: "Create Recipe" form collects all data correctly and logs the final JSON object to console.

**Mayor-king (Search):**

- [ ] Implement `useSearchStore`: `setQuery`, `setFilter`.
- [ ] Connect `SearchBar` and `CategoryFilter` to the store.
- [ ] **Deliverable**: Typing in search bar updates the global query state; clicking categories updates filter state.

**Precious (Interactions):**

- [ ] Create `useInteractionStore`.
- [ ] Implement Ingredient Checklist logic: Clicking an ingredient toggles a visual "checked" state (persist to `localStorage`).
- [ ] **Deliverable**: Functional Ingredient checklist on Recipe Detail page.

### 🌙 Afternoon: Data Fetching & Integration

**Eyitayo:**

- [ ] Code Review PRs from Morning session.
- [ ] Help Tomilade with complex form validation (`zod`).

**Ibraheem:**

- [ ] Fetch User Profile data on the `/profile` page using `useAuthStore`.
- [ ] Implement "Edit Profile" modal (Name, Bio).
- [ ] **Deliverable**: `/profile` displays real user data.

**Tomilade:**

- [ ] Connect "Publish" button to `POST /recipes` endpoint.
- [ ] Handle success/redirect to the new recipe page.
- [ ] **Deliverable**: User can successfully create a recipe and be redirected.

**Mayor-king:**

- [ ] Connect `RecipeFeed` to `GET /search/recipes`.
- [ ] Implement "Collections" tab in Profile (Saved Recipes).
- [ ] **Deliverable**: Feed shows real recipes; Search filters actually filter the feed.

**Precious:**

- [ ] Implement Reviews: Fetch reviews for a recipe (`GET /recipes/:id/reviews`).
- [ ] Create "Add Review" form/modal.
- [ ] **Deliverable**: Users can see and add reviews.

---

## Day 2: Advanced Features & Polish

### 🌞 Morning: Complex Logic

**Eyitayo:**

- [ ] Audit performance (Lighthouse).
- [ ] Ensure Git flow is clean (squash merge feature branches).

**Ibraheem:**

- [ ] **Task**: Image Upload for Profile Avatar (`POST /upload/images`).
- [ ] **Task**: Layout protection (redirect to Login if accessing protected routes).

**Tomilade:**

- [ ] **Task**: Recipe Detail View (Dynamic `[id]/page.tsx`). Fetch full details including Chef info.
- [ ] **Task**: Edit/Delete Recipe functionality (only if user is owner).

**Mayor-king:**

- [ ] **Task**: Pagination for Search Results (Infinite scroll or "Load More").
- [ ] **Task**: Empty states (e.g., "No recipes found").

**Precious:**

- [ ] **Task**: AI Recommendations. Create a form/button to "Get Recommendations based on Mood". Call API -> Display results.
- [ ] **Task**: Pricing Comparison. Mock or Fetch data for "Instacart vs Amazon" price on Detail page.

### 🌙 Afternoon: Polish & Verification

**All Developers:**

- [ ] **Bug Bash**: Everyone tests each other's features.
- [ ] **Styling**: Ensure Dark Mode looks good everywhere.
- [ ] **Responsiveness**: Verify mobile bottom nav and layout.

**Eyitayo:**

- [ ] Final Code Freeze.
- [ ] Deploy to Vercel/Staging for final check.
- [ ] Merge to Main.

---

## Git Workflow Guidelines for Team

1.  **Branching**:
    - `main` = Production code.
    - `dev` = Integration branch.
    - Feature branches: `feat/auth-integration` (Ibraheem), `feat/recipe-crud` (Tomilade), etc.
2.  **Commits**:
    - Use Conventional Commits: `feat: add login store`, `fix: header overlap on mobile`.
    - Small, frequent commits (at least 2-3 per day).
3.  **PRs**:
    - Open PR against `dev`.
    - **MUST** have 1 approval from Eyitayo before merging.
    - Resolve merge conflicts locally before pushing.

## Backend Endpoints Reference

(Refer to `implementation.md` for full list)

- Auth: `/auth/*`
- Recipes: `/recipes/*`
- Search: `/search/*`
- Reviews: `/reviews/*`
