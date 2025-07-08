import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    base: "/<your-repo-name>/", // 👈 replace this with your actual GitHub repo name
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "client", "src"),
        },
    },
    root: path.resolve(__dirname, "client"),
    build: {
        outDir: path.resolve(__dirname, "docs"),
        emptyOutDir: true,
    },
});
