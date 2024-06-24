import Link from 'next/link'

export default function Login() {
  return (
        <header>
        <nav>
          <ul>
              <Link href="/login">
            <li>
              Login
            </li>
              </Link>
          </ul>
        </nav>
        </header>
  )
}
