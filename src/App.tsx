import Header from "@/components/sections/Header";
import About from "./components/sections/About";
import Socials from "./components/sections/Socials";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Navbar from "./components/sections/Navbar";
import Menu from "./components/sections/Menu";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface Menu {
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const MenuContext = createContext<Menu>({} as Menu);

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");

    if (html) {
      html.style.overflow = menuIsOpen ? "hidden" : "inherit";
    }
  }, [menuIsOpen]);

  return (
    <main className="bg-primary-foreground relative">
      <MenuContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
        <Navbar />
        {menuIsOpen && <Menu />}
      </MenuContext.Provider>
      <Header />
      <About />
      <Socials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
