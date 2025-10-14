import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const devApiUrl = env.VITE_DEV_API_URL ?? "http://localhost:8080";
  const prodApiUrl = env.VITE_PROD_API_URL ?? env.VITE_DEV_API_URL ?? devApiUrl;

  const server = {
    proxy: {
      "/api": {
        target: prodApiUrl,
        changeOrigin: true,
      },
    },
  };

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server,
  };
});
