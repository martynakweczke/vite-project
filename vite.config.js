import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        catalog: resolve(__dirname, "src/html/catalog.html"),
        about: resolve(__dirname, "src/html/about.html"),
        contact: resolve(__dirname, "src/html/contact.html"),
        cart: resolve(__dirname, "src/html/cart.html"),
        productDetails: resolve(__dirname, "src/html/product-details.html"),
      },
    },
  },
});
