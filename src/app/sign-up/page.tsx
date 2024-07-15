"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signUpNewUser } from "../../action/signup"
import { useFormStatus } from "react-dom";


export default function SignInPage() {
  const { pending } = useFormStatus();

  return (
    <div className="flex items-center justify-center flex-col gap-4 mt-20">
      <h1 className="text-center text-2xl">Wanna know the secret? <br/> Log in now!</h1>
      <form action={signUpNewUser}>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" placeholder="Email" type="email" />
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" placeholder="Password" type="password" />
        <div className="mt-2 flex gap-4 items-center justify-center">
        <Button type="submit" className="disabled:opacity-70" disabled={pending}>
        {pending ? ( <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white mr-auto ml-auto"/> )
        : (
          <>Sign Up</>
        )}
        </Button>
        </div>
      </form>
    </div>
  )
}
