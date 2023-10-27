// vite.config.js
import {
    resolve
 } from 'path'
 import {
    defineConfig
 } from 'vite'
 
 export default defineConfig({
    build: {
       rollupOptions: {
          input: {
             main: resolve(__dirname, 'index.html'),
             scr: resolve(__dirname, 'pages/scr/index.html')
          },
       },
    },
 })