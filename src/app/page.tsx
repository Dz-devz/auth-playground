import Home from "./components/home";
import WantToSignIn from "./components/want-to-sign-in";

export default function App() {
  return (
    <main className="flex items-center mt-5 justify-center flex-col gap-10">
      <Home />
      <WantToSignIn /> 

    </main>
  );
}

