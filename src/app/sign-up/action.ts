'use server'

import { createClient } from '@/utils/supabase/server'
import { formSchema } from "../../action/formSchema"

const supabase = createClient()


export async function signUpNewUser(formData: FormData) {
  const parsedSchema = formSchema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  const { data, error } = await supabase.auth.signUp({
    email: parsedSchema.email,
    password: parsedSchema.password,
    options: {
      emailRedirectTo: 'http://localhost:3000/login',
    },
  })
}
