import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    manifest: true, // Generates a manifest file
    outDir: 'dist', // Specify the output directory
    assetsDir: 'assets', // Specify the assets directory
    cssCodeSplit: true, // Enable CSS code splitting
    rollupOptions: {
      output: {
        entryFileNames: '[name].js', // Customize the entry file names
        chunkFileNames: '[name].js', // Customize the chunk file names
        assetFileNames: 'assets/[name].[ext]', // Customize the name of the emitted files
      },
    },
    assetFileNames: 'assets/[name].[ext]', // Customize the name of the emitted files
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
