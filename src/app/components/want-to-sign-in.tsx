import Link from 'next/link'

export default function WantToSignIn() {
  return (
          <button className='rounded-lg border-b-2 border-b-zinc-800 hover:border-b-zinc-600 hover:text-zinc-600 p-2 m-2 text-2xl'>
              <Link href="/login">
                  Want to Sign in?    
              </Link>
          </button>
  )
}
