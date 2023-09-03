import { defineConfig } from "vite";
import svgr from 'vite-plugin-svgr'
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@stores": path.resolve(__dirname, "./src/stores"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
    },
  },
  plugins: [react(), svgr()],
});
