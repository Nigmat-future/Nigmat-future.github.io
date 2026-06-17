import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// User site served from repo root, so base is "/".
// Allow override via VITE_BASE for project-page deploys if ever needed.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? "/",
  server: {
    port: 5173,
    open: true,
  },
});
