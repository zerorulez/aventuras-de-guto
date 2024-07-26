import { InstagramIcon, YoutubeIcon } from "hugeicons-react";
import { menuItems } from "@/lib/data";

function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground text-center flex flex-col gap-5 py-10 px-5">
      <div>
        <h3 className="font-bold text-lg">Aventuras de Guto</h3>
        <small>
          Obrigado por visitar a nossa página! Estamos ansiosos para
          compartilhar todas as nossas aventuras com você. Não esqueça de se
          inscrever e seguir.
        </small>
      </div>
      <menu className="flex flex-col gap-5 justify-center lg:flex-row">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </menu>
      <div className="flex justify-center items-center gap-5">
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
