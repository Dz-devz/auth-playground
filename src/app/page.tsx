import { logout } from "./logout/action";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-center text-6xl">Auth Playground</h1>
      <form action={logout}>
      <button type="submit">
        Logout
      </button>
      </form>
    </main>
  );
}
