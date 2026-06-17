import { useReveal } from "./lib/useReveal";
import { ScrollProgress } from "./components/ScrollProgress";
import { Nav } from "./components/Nav";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Research } from "./sections/Research";
import { Publications } from "./sections/Publications";
import { OpenSource } from "./sections/OpenSource";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";

export default function App() {
  useReveal();
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Research />
        <Publications />
        <OpenSource />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
