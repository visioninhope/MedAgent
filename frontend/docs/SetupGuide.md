# Setup Guide for frontend

This document gives an overview on how the frontend was set up.

For the beginning, an overview over the applied steps:

|   | Step                                                       | What is Installed?               | Why is it Needed?                              | Outcome                             | Link                                                                        |
|---|------------------------------------------------------------|----------------------------------|------------------------------------------------|-------------------------------------|-----------------------------------------------------------------------------|
| 1 | [Create Next.js Project](#1-create-nextjs-project)         | Next.js, React, TypeScript       | Core framework for modern web development      | Clean Next.js project scaffold      | [Next.js Docs](https://nextjs.org/docs)                                     |
| 2 | [Tailwind CSS Setup](#2-tailwind-css-setup)                | Tailwind CSS                     | Utility-first CSS for responsive design        | Styled components and pages         | [Tailwind Docs](https://tailwindcss.com/docs)                               |
| 3 | [Storybook Setup](#3-storybook-setup)                      | Storybook                        | Isolated UI development and testing            | Component library for showcasing UI | [Storybook Docs](https://storybook.js.org/docs/react)                       |
| 4 | [Component Organization](#4-component-organization)        | Core, Composite, and Screens     | Organized and maintainable component structure | Clear project hierarchy             | [Next.js Routing Docs](https://nextjs.org/docs/routing/introduction)        |
| 5 | [Useful Packages](#5-useful-packages)                      | Headless UI, Lucide React        | UI components and modern icon set              | Enhanced UI and icon integration    | [Headless UI](https://headlessui.com/), [Lucide React](https://lucide.dev/) |
| 6 | [Running the Project](#6-running-and-building-the-project) | Next.js dev server and Storybook | Development and preview environments           | Fully operational frontend workflow | [Next.js Docs (Running)](https://nextjs.org/docs/getting-started)           |

---

### 1. Create Next.js Project
1. Initiate the project
```bash
npx create-next-app@latest frontend
```
Selected options during setup:
- TypeScript: Yes ✅ *(Adds type safety and improves developer experience)*
- ESLint: Yes ✅ *(Ensures code quality and catches errors early)*
- Tailwind CSS: Yes ✅ *(For utility-first styling and responsive design)*
- src/ directory: Yes ✅ *(Keeps project structure clean and organized)*
- App Router (recommended): Yes ✅ *(Uses Next.js's new file-based routing system)*
- Turbopack: Optional ⚙️ (Choose Yes for faster builds, No for stability)
- Import Alias: Yes (@/*) ✅ (Simplifies imports like @/components)

2. Test whether that worked
```bash
# inside ./frontend
npm run dev
```
- Visit `http://localhost:3000` to see the Next.js welcome page.

### 2. Tailwind CSS Setup**
Should already have been installed during the setup, but we will make sure.

1. Verify installation in `package.json` - should include `tailwindcss`.
2. Update `tailwind.config.ts` to include content paths.
```typescript
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
```

3. Add Tailwind directives in `src/styles/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Test Tailwind, for example in `src/app/page.tsx`:
```javascript
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">Tailwind is Working! 🎨</h1>
    </main>
  );
}
```
- Need to restart `npm run dev` to see updates

### 3. Storybook Setup
1. Install Storybook:
```bash
npx storybook@latest init
```
- Also creates the configuration files in `frontend/.storybook`
- To add stories to components, let's say for the component `Button.tsx`, create a story file `Button.stories.tsx`. This looks for example like the following snippet

```javascript
// src/components/core/Button.stories.tsx
import { Button } from './Button';

export default { title: 'Core/Button', component: Button };
export const Default = () => <Button label="Click Me" />;
```

2. To allow documentation for the components, add the addon docs
```bash
npm install @storybook/addon.docs
```
- Need to ensure its enabled in the `.storybook/main.ts`, and need to add documentation to the respective story files

### 4. Component Organization
Organize components into folders:
```
src/
├─ components/        # with according story files
│  ├─ core/           # Basic components (Button, ...)
│  ├─ composite/      # Complex components (Modal, ...)
│  └─ screens/        
├─ styles/            # All css files
├─ types/             # Shared prop types
├─ app/               # Entry point for Next.js application
```

---

### 5. Useful Packages
1. Add Headless UI for accessible components
```bash
npm install @headlessui/react
```
2. Add Lucide React for a modern icon set
```bash
npm install lucide-react
```

Example usage:
```javascript
import { Dialog } from '@headlessui/react';
import { Heart } from 'lucide-react';

export function Modal({ isOpen, close }: { isOpen: boolean; close: () => void }) {
  return (
    <Dialog open={isOpen} onClose={close}>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
      <Dialog.Panel className="fixed inset-0 m-auto max-w-sm p-8 bg-white">
        <Dialog.Title>Modal Title</Dialog.Title>
        <Dialog.Description>This is a description of the modal.</Dialog.Description>
        <button onClick={close}><span>Close</span><Heart className="h-6 w-6 text-red-500" /></button>
      </Dialog.Panel>
    </Dialog>
  );
}
```

3. Also added the following:
```bash
npm install tailwindcss autoprefixer postcss
```
- Tailwindcss should already be installed
- In `postcss.config.js`, there should be:
  - ```javascript
    module.exports = {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      },
    };
    ```

### 6. Running and Building the Project
1. Run Dev Server:
```bash
npm run dev
```
2. 
3. Run Storybook:
```bash
npm run storybook
```

3. Build for Production:
```bash
npm run build
```

4. Preview Production Build:
```bash
npm run start
```

5. Further notes
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
