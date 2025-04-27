"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'
import { ArrowLeft } from 'lucide-react'

export  function BackButton() {

    const router = useRouter()
  return (
    
     <Button asChild  variant="ghost" onClick={() => router.back()}>
      <div className='cursor-pointer flex items-center justify-center '>
     <ArrowLeft  />  Back     
     </div>
    </Button>
    
    
  )
}
