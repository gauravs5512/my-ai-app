import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const devApiUrl = env.VITE_DEV_API_URL ?? "http://localhost:3000";
  const prodApiUrl = env.VITE_PROD_API_URL ?? env.VITE_DEV_API_URL ?? devApiUrl;

  const isDev = command === "serve";

  const server = {
    proxy: {
      "/api": {
        target: devApiUrl,
        changeOrigin: true,
      },
    },
  };

  const apiBaseUrl = isDev ? "/api" : prodApiUrl;

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server,
    define: {
      "import.meta.env.VITE_API_BASE_URL": JSON.stringify(apiBaseUrl),
    },
  };
});
