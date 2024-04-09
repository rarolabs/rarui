import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [vue(), vanillaExtractPlugin(), dts({ rollupTypes: true })],

  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@rarui-vuejs/link",
      fileName: "index",
    },
    rollupOptions: {
      external: ["vue", "@rarui/styles"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
