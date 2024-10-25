import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
    css: true,
    watch: false,
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      provider: "v8",
      reporter: [["text"], ["json"]],
      thresholds: {
        lines: 45,
        functions: 38,
        statements: 45,
        branches: 68,
      },
    },
  },
});
