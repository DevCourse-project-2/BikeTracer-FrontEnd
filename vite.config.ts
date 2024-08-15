import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {VitePWA, VitePWAOptions} from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      }
    } as VitePWAOptions)
  ],
})
