import { Header } from '@/components/header'

export default async function RepairShopLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col h-screen '>
    
      <Header />
      <div className='flex-1 w-2/3 mx-auto p-4 text-lg  h-full  '>{children}</div>
    </div>
    
  )
}