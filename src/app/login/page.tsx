import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { login, signUp } from "./action"
import { Label } from "@/components/ui/label"


export default function LoginPage() {
  // ...

  return (
      <form>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" placeholder="Email" />
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" placeholder="Password" />
        <Button type="submit">
          <button formAction={login}>Log In</button>
        </Button>
        <Button className="mr-2 ml-2" type="submit">
          <button formAction={signUp}>Sign un</button>
        </Button>
      </form>
  )
}
