import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // Automatically update service worker
      manifest: {
        name: "Best Men's Hair Salon",
        short_name: "HairSalon",
        description: "Experience the best new hairstyles at our salon.",
        theme_color: "#000000",
        icons: [
          {
            src: "/icons/icon-128.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif|css|js)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "assets-cache",
              expiration: {
                maxEntries: 50,
              },
            },
          },
        ],
      },
    }),
  ],
});
