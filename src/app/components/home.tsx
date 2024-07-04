'use client'

import { createClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';

interface User {
    id: string;
  }

export default function  Home() {
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
      <p className='w-[1100px] mt-5 text-2xl text-center'>
        Here, you&apos;re diving into the world of authentication, where every challenge and solution is a step toward mastering the art of securing access and verifying identities. This playground is your dedicated space for hands-on learning, where concepts like Supabase Auth and session management come to life through experimentation and practice. Whether you&apos;re exploring different authentication methods, refining your understanding of security protocols, or fine-tuning your skills in implementing authentication mechanisms, this playground is where theory meets practical application. It&apos;s a place where mistakes are learning opportunities and breakthroughs are celebrated milestones on your journey to becoming proficient in authentication. So, dive in, experiment fearlessly, and let your auth playground be the forge where your expertise in authentication is shaped and honed.
      </p>
    </div>
  )
}
