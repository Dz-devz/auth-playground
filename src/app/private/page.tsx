import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import Logout from '../components/logout'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return(
  <>
    <p className='text-6xl text-center mt-auto mb-auto'>Hello {data.user.email}</p>
    <p className='text-4xl text-center'>My Secret is I will be a successful on what I want to be!</p>
    <Logout />
  </>
  ) 
}