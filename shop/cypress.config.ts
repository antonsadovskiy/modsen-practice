import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    env: {
      apiBaseUrl: "https://fakestoreapi.com",
    },
  },
});
