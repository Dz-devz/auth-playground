import { createClient } from '@/utils/supabase/server'
import { emailSchema } from './formSchema';

const supabase = createClient()
async function signInWithEmail(formData: FormData) {
    

  const parsedSchema = emailSchema.parse({
    email: formData.get("email"),
  });

    const { data, error } = await supabase.auth.signInWithOtp({
      email: parsedSchema,
      options: {
        // set this to false if you do not want the user to be automatically signed up
        shouldCreateUser: false,
        emailRedirectTo: 'http://localhost:3000/login',
      },
    })
  }
  