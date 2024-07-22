import { MenuContext } from "@/App";
import { Menu01Icon } from "hugeicons-react";
import { useContext } from "react";

function Navbar() {
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext);

  return (
    <nav className=" bg-primary-foreground w-full flex justify-between p-5 border-b-2">
      <p className="font-bold text-primary">Aventuras de Guto</p>
      <Menu01Icon
        className="cursor-pointer text-primary"
        onClick={() => {
          setMenuIsOpen(!menuIsOpen);
        }}
      />
    </nav>
  );
}

export default Navbar;
