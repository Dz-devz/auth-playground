import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signUpNewUser } from "./action"


export default function SignInPage() {

  return (
    <div className="flex items-center justify-center flex-col gap-4 mt-20">
      <h1 className="text-center text-2xl">Wanna know the secret? <br/> Log in now!</h1>
      <form>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" placeholder="Email" type="email" />
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" placeholder="Password" type="password" />
        <div className="mt-2 flex gap-4 items-center justify-center">
        <Button type="submit" formAction={signUpNewUser}>
          Sign Up
        </Button>
        </div>
      </form>
    </div>
  )
}
