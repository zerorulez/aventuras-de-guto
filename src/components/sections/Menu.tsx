import { MenuContext } from "@/App";
import { menuItems } from "@/lib/data";
import { useContext } from "react";

function Menu() {
  const { setMenuIsOpen } = useContext(MenuContext);

  const goTo = (link: string) => {
    location.href = link; //Go to the target element.
    setMenuIsOpen(false);
  };

  return (
    <div className="fixed bg-[#000] bg-opacity-80 h-screen w-full text-primary-foreground flex justify-between items-start p-5">
      <menu className="flex flex-col gap-4 font-bold text-xl">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              goTo(item.href);
            }}
          >
            {item.name}
          </li>
        ))}
      </menu>
    </div>
  );
}

export default Menu;
