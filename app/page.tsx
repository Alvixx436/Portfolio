import About from "./components/About";

import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Skills />
      <Gallery />
    </main>
  );
}
