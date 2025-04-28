import Image from 'next/image'

import { sql } from 'drizzle-orm'

import db from '@/db'

export default async function Home() {
  const result = await db.execute(sql`
    SELECT * FROM pg_catalog.pg_tables`)
  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
      <main className='flex flex-col'>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </main>
    </div>
  )
}
