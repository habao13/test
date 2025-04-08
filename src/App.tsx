import { Home } from "./components/home";
import { Login } from "./components/login";
import { About } from "./components/abouts";
import backetimg from "./assets/images/background/badminton1.png";

export default function App() {
  return (
    <div className="relative w-screen h-screen">
      <Home />
      <Login />
      <section className="w-full h-full bg-cover bg-center relative">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm w-full h-full"
          style={{ backgroundImage: `url(${backetimg})` }}
        ></div>
      </section>
      <About />
    </div>
  );
}
