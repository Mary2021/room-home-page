import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/room-home-page/',
  test: {
    //add jsdom to vite
    environment: 'jsdom',
    //make all imports from Vitest global so that we don’t manually import in each test file
    globals: true,
    //include this setup test file
    setupFiles: './src/tests/setup.jsx', // assuming the test folder is in the src of our project
  }
})