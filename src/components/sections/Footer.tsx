import { InstagramIcon, YoutubeIcon } from "hugeicons-react";
import { menuItems } from "@/lib/data";

function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground text-center flex flex-col gap-5 py-10 px-5 ">
      <h3 className="font-bold text-lg">Aventuras de Guto</h3>
      <menu className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </menu>
      <div className="flex justify-center items-center gap-2">
        <a
          href="https://www.youtube.com/@AventurasdeGuto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeIcon />
        </a>
        <a
          href="https://www.instagram.com/aventurasdeguto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
      </div>
      <p>
        © {new Date().getFullYear()} Landing page feita por{" "}
        <a
          href="http://zerorulez.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lucas Ribeiro
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
