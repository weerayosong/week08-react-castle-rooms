**ProAsyncAwait**

- async await, !response.ok, throw new error, try catch, finally

```
import { useState, useEffect } from "react";

export default function SimpleAsyncAwait() {
 const [name, setName] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
   const getData = async () => {
     try {
       const res = await fetch("https://pokeapi.co/api/v2/pokemon/1")

       if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
       const data = await res.json();
       setName(data.name);
     } catch (err) {
       setError(err.message);
     } finally {
       setLoading(false);
     }
   };

   getData();
 }, []);

//     useEffect(() => {
//     fetch("https://pokeapi.co/api/v2/pokemon/1")
//       .then((res) => {
//         if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
//         return res.json();
//       })
//       .then((data) => setName(data.name))
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, []);

 return (
   <div className="flex flex-col items-center gap-2 p-6 bg-gray-800 text-white rounded-xl">
     <h2 className="text-xl font-bold text-yellow-300">Simple async/await</h2>
     {loading && <p className="text-blue-300 animate-pulse">Loading...</p>}
     {error && <p className="text-red-400 text-sm">{error}</p>}
     {name && <p className="capitalize text-2xl">{name}</p>}
   </div>
 );
}
```

## Vite + React Starter

A concise starter codebase for React apps built with Vite. It ships with modern tooling, Tailwind CSS v4, and basic project scaffolding so you can start building immediately.

### What's Included

- **Vite Build Tool:** Fast dev server, optimized builds, and zero-config defaults via `vite.config.js`.
- **React 19:** Latest React and `react-dom` set up with `@vitejs/plugin-react`.
- **Tailwind CSS v4:** Tailwind configured using `@tailwindcss/vite` with styles in `src/index.css`.
- **ESLint:** Base config in `eslint.config.js` with React Hooks and React Refresh plugins.
- **Starter Files:** `index.html`, `src/main.jsx`, `src/App.jsx`, `src/assets/`, and `public/` ready to customize.
- **Deployment Config:** `vercel.json` for path resolution when deploying to Vercel.

### Scripts

- `dev`: Start the Vite dev server.
- `build`: Create a production build.
- `preview`: Preview the production build locally.
- `lint`: Run ESLint on the project.

### Project Structure

```
vite-react-app/
├─ index.html
├─ eslint.config.js
├─ vite.config.js
├─ vercel.json
├─ public/
└─ src/
	├─ main.jsx
	├─ App.jsx
	├─ index.css
	└─ assets/
```
