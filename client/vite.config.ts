import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    base: "/portfolio/",

    plugins: [react()],
    root: path.resolve(__dirname),

    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },

    server: {
        port: 5000,
        host: "0.0.0.0",
    },

    build: {
        outDir: path.resolve(__dirname, "..", "docs"),
        emptyOutDir: true,
    },
});
