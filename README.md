# Inventoria — Makerspace Inventory Management System

<p align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui" />
  <img src="https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=3ECF8E" alt="Supabase" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
</p>

Inventoria is a lightweight, highly responsive inventory and borrowing system designed for makerspaces, fablabs, and shared hardware labs. It features secure user authentication, real-time database transactions, and a custom-built React architecture designed for maximum performance and scalability.

## Architectural Highlights

Unlike standard hackathon projects, Inventoria strictly separates UI logic from database mutations:
* **Global Security Umbrella (`AuthContext`):** A centralized Context API acts as a "Radio Tower," broadcasting the user's session state across the app. This enables strict Protected Routes without prop-drilling.
* **Headless Data Hooks:** Database fetching and mutation logic is completely decoupled from the UI layer using custom hooks (`useInventory`, `useBorrow`). This keeps UI components "dumb" and easy to test.
* **Optimistic UI Updates:** The borrowing interface instantly calculates and updates available quantities on the screen for a zero-latency user experience, while resolving the Supabase database mutations safely in the background.

## Core Features

**Authentication**
* Email/password authentication using Supabase.
* Strict Bouncer logic (Protected Routes) kicks unauthenticated users to the login screen.
* Persistent sessions across page reloads.

**Inventory & Borrowing**
* Responsive grid layout built with Tailwind CSS and `shadcn/ui`.
* Dynamic quantity selector with built-in validation (prevents users from selecting more items than physically available).
* Per-item loading spinners and safety states to prevent database spamming.
* Multi-quantity checkout attached directly to the authenticated user's ID.

## Tech Stack

* **Frontend:** React 18, TypeScript, Vite
* **Routing:** React Router DOM v6
* **Styling:** Tailwind CSS, `shadcn/ui`, Remix Icons
* **Backend & Auth:** Supabase (PostgreSQL), Supabase Auth

## Project Structure

We follow a feature-based folder architecture to keep the codebase highly maintainable:

```text
src/
 ├── components/           # Reusable "Dumb" UI components
 │    ├── ui/              # shadcn UI elements
 │    └── QuantitySelector.tsx
 │
 ├── contexts/             # Global State
 │    └── AuthContext.tsx  # The Security Umbrella
 │
 ├── features/             # Feature-based logic and pages
 │    ├── auth/
 │    │    └── pages/LoginPage.tsx
 │    │
 │    └── inventory/
 │         ├── components/ # Inventory-specific UI
 │         │    ├── ItemCard.tsx
 │         │    └── SkeletonCard.tsx
 │         ├── hooks/      # Headless Data Layer
 │         │    ├── useInventory.ts
 │         │    └── useBorrow.ts
 │         └── pages/
 │              └── InventoryPage.tsx
 │
 └── services/             # Direct Database Engines
      ├── inventoryService.ts
      ├── borrowService.ts
      └── supabase.ts
