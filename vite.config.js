import { defineConfig } from 'vite';
import FullReload from 'vite-plugin-full-reload';


export default defineConfig({
  base: '/goit-js-hw-09/', 
  root: 'src',             
  build: {
    outDir: '../dist',     
    emptyOutDir: true,     
  },
  plugins: [
    FullReload(['src/**/*.html']), 
  ],
});
