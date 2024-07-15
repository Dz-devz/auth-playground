import { Button } from "@/components/ui/button";
import { logout } from "@/action/logout"

export default function Logout() {
  return (
    <form className="flex items-center justify-center mt-2" action={logout}>
      <Button>Log Out</Button>
    </form>

  ) 
}
