import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    exclude: ["@tinymce/tinymce-react"],
  },
});
