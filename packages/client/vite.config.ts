import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const devApiUrl = env.VITE_DEV_API_URL ?? "http://localhost:3000";
  const prodApiRoot =
    env.VITE_PROD_API_URL ?? env.VITE_API_BASE_URL ?? devApiUrl;

  const ensureApiSuffix = (url: string) => {
    const normalized = url.replace(/\/+$/, "");
    return normalized.endsWith("/api") ? normalized : `${normalized}/api`;
  };

  const isDevServer = command === "serve";

  const server = isDevServer
    ? {
        proxy: {
          "/api": {
            target: devApiUrl,
            changeOrigin: true,
          },
        },
      }
    : undefined;

  const apiBaseUrl = isDevServer ? "/api" : ensureApiSuffix(prodApiRoot);

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
