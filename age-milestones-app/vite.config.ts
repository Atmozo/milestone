import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'MyPWA',
        short_name: 'PWA',
        theme_color: 'blue',
        icons: [
          {
            src: 'wqwqwq.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'wqwqwq.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
