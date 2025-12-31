import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    open: true,
  },

  build: {
    sourcemap: false, // ❗ Disable for Render (smaller & faster builds)

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (id.includes("react")) return "react";
          if (id.includes("react-router-dom")) return "router";
          if (id.includes("firebase")) return "firebase";
          if (id.includes("recharts")) return "charts";

          return "vendor";
        },
      },
    },

    minify: "esbuild", // ⚡ Faster & safer than terser on Render
    target: "es2018", // Broad compatibility, faster build
    chunkSizeWarningLimit: 1000,
  },

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
    ],
  },
});
