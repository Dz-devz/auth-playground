import ClientComponent from "./components/client-component";
import { logout } from "./logout/action";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center flex-col gap-10">
      <ClientComponent />
      <h1 className="text-center text-6xl">Auth Playground</h1>
      <form action={logout}>
      <button type="submit">
        Logout
      </button>
      </form>

    </main>
  );
}
