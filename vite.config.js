import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/hygieia/",
  plugins: [react()],
  // This must match the GitHub repo name
});
