import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteSitemap from 'vite-plugin-sitemap';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteSitemap({
      hostname: 'https://https://edusphere-sandy.vercel.app/',
      generateRobotsTxt: true,
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Edusphere',
          description: 'Edusphere is a leading online learning platform dedicated to empowering the next generation of developers through high-quality, industry-relevant courses. Specializing in Web Development and DevOps, Edusphere offers expertly curated content designed by experienced professionals to help learners build strong technical foundations and job-ready skills.',
        },
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [tailwindcss(),react()],
// })
