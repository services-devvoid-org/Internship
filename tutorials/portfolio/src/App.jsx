import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="w-screen h-full bg-gray-200 font-mono hide-scrollbar">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Socials />
    </div>
  );
}

export default App;
