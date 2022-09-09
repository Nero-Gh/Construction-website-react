import { defineConfig } from "vite";
// import ViteCSSExportPlugin from "vite-plugin-css-export";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
