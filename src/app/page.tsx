import ClientComponent from "./components/client-component";
import Login from "./components/login";
import { logout } from "./logout/action";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col gap-10">
      <Login /> 
      <ClientComponent />
    </main>
  );
}

