import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { login } from "./action"
import { Label } from "@/components/ui/label"
import Link from "next/link"


export default function LoginPage() {
  // ...

  return (
    <div className="flex items-center justify-center flex-col gap-4 mt-20">
      <h1 className="text-center text-2xl">Wanna know the secret? <br/> Log in now!</h1>
      <form>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" placeholder="Email" />
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" placeholder="Password" />
        <div className="mt-2 flex gap-4 items-center justify-center">
        <Button type="submit">
          <button formAction={login}>Log In</button>
        </Button>
        <Button>
          <Link href="/signin">Sign up</Link>
        </Button>
        </div>
      </form>
    </div>
  )
}
