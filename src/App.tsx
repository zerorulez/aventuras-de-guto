import Header from "@/components/sections/Header";
import About from "./components/sections/About";
import Socials from "./components/sections/Socials";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <main className="bg-orange-light">
      <Header />
      <About />
      <Socials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
