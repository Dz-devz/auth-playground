'use client'

import { createClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';
import Logout from './logout';

interface User {
    id: string;
  }

export default function ClientComponent() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {

    async function getUser(){

    const supabase = createClient()
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        console.log('No User.');    
    } else {
        setUser(data.user)
    }
}
    getUser()
  },[])

  return(
    <div className='flex items-center justify-center flex-col'>
      <h1 className='text-center text-6xl'>
      Welcome to my Auth Playground!
      </h1>
      <Logout />
    </div>
  )
}
