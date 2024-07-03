'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { formSchema } from '@/action/formSchema'

export async function login(formData: FormData) {
  const supabase = createClient()

  // const parsedSchema = formSchema.safeParse(data);

  const parsedSchema = formSchema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  const { error } = await supabase.auth.signInWithPassword(parsedSchema);

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/private')
}

export async function signUp(formData: FormData) {
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
  redirect('/login')
}