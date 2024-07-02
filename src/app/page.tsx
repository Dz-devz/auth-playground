import ClientComponent from "./components/client-component";
import WantToSignIn from "./components/want-to-sign-in";

export default function Home() {
  return (
    <main className="flex items-center mt-5 justify-center flex-col gap-10">
      <ClientComponent />
      <WantToSignIn /> 

    </main>
  );
}

