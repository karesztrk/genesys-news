import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    include: ["**/*.test.[jt]s?(x)"],
    coverage: {
      include: ["src/**/*"],
    },
  },
});
