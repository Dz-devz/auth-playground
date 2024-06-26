import ClientComponent from "./components/client-component";
import Login from "./components/login";
import { logout } from "./logout/action";

export default function Home() {
  return (
    <main className="flex items-center mt-5 justify-center flex-col gap-10">
      <ClientComponent />
      <Login /> 

    </main>
  );
}

