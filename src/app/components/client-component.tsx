'use client'

import { createClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react'

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
    <>
    <h1>Client Component</h1>
    </>
  )
}
