import { logout } from "../logout/action";

export default function Logout() {
  return (
    <form action={logout}>
      <button type="submit">
        Logout
      </button>
    </form>

  ) 
}
