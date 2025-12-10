import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/royco-distributors/',
  server: {
    headers: {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-src 'self' www.google.com; connect-src 'self' https://www.google.com"
    },
    cors: {
      origin: ['https://evankooz.github.io', 'http://localhost:5173'],
      credentials: true
    }
  }
});