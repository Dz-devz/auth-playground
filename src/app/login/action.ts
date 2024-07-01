'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { formSchema } from '@/action/formSchema'

export async function login(formData: FormData) {
  const supabase = createClient()

  const parsedSchema = formSchema.parse({
    id: formData.get("email"),
    link: formData.get("password"),
  });

  const { error } = await supabase.auth.signInWithPassword(parsedSchema)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  const parsedLogin = formSchema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  

  const { error } = await supabase.auth.signUp(parsedLogin)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}