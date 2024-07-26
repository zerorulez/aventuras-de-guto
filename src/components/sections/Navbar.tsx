import { MenuContext } from "@/App";
import { menuItems } from "@/lib/data";
import clsx from "clsx";
import { Cancel01Icon, Menu01Icon } from "hugeicons-react";
import { useContext } from "react";

function Navbar() {
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext);

  return (
    <nav
      className={clsx(
        "bg-primary-foreground w-full flex justify-between p-5 border-b-2",
        "lg:border-b-0 lg:absolute lg:bg-transparent lg:py-10 lg:px-20"
      )}
    >
      <p className="font-bold text-primary lg:text-2xl">Aventuras de Guto</p>
      <menu className="gap-20 text-lg text-primary-foreground hidden lg:flex">
        {menuItems.map((item, index) => (
          <li key={index}>
            {index !== 0 && <a href={item.href}>{item.name}</a>}
          </li>
        ))}
      </menu>
      {menuIsOpen ? (
        <Cancel01Icon
          className="cursor-pointer text-primary lg:hidden"
          onClick={() => {
            setMenuIsOpen(false);
          }}
        />
      ) : (
        <Menu01Icon
          className="cursor-pointer text-primary lg:hidden"
          onClick={() => {
            setMenuIsOpen(true);
          }}
        />
      )}
    </nav>
  );
}

export default Navbar;
