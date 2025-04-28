import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import { env } from '@/data/env/server'

export const client = postgres(env.DATABASE_URL)
const db = drizzle(client)
export default db
