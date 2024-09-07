import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: '/AnimalDex',
    plugins: [react()],
    define: {
      'process.env.S3_BASE_URL': JSON.stringify(env.S3_BASE_URL),
      'process.env.ANIMAL_API_KEY': JSON.stringify(env.ANIMAL_API_KEY),
      // 'process.env.YOUR_BOOLEAN_VARIABLE': env.YOUR_BOOLEAN_VARIABLE,
      // If you want to expose all env variables, which is not recommended
      // 'process.env': env
    },
  }
})
