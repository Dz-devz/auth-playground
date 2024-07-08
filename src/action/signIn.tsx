import { createClient } from '@/utils/supabase/server'

const supabase = createClient()
async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: 'example@email.com',
      options: {
        // set this to false if you do not want the user to be automatically signed up
        shouldCreateUser: false,
        emailRedirectTo: 'https://example.com/welcome',
      },
    })

    return(
        <>
        <h2>Confirm your signup</h2>
        <p>Follow this link to confirm your user:</p>
        <p>
            <a href="{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=signup">
            Confirm your mail
        </a>
        </p>
        </>
    )
  }
  