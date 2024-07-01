import { login, signup } from "./action"

export default function LoginPage() {  
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button className="mr-2 ml-2" formAction={login}>Log in</button>
      <button formAction={signup}>Sign Up</button>
    </form>
  )
}