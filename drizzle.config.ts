import { defineConfig } from 'drizzle-kit'

import env from '@/data/env/server'

export default defineConfig({
  schema: './src/db/schema/index.ts',
  out: './src/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL
  },
  verbose: true,
  strict: true
})
