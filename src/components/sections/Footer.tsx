import { InstagramIcon, YoutubeIcon } from "hugeicons-react";

function Footer() {
  return (
    <footer className="bg-blue-light text-orange-light text-center flex flex-col gap-5 py-10 px-5 ">
      <h3 className="font-bold text-lg">Aventuras de Guto</h3>
      <ul>
        <li>Inscreva-se</li>
        <li>Sobre</li>
        <li>Redes Sociais</li>
        <li>Contato</li>
      </ul>
      <div className="flex justify-center items-center gap-2">
        <YoutubeIcon />
        <InstagramIcon />
      </div>
      <p>© 2024 Landing page feita por Lucas Ribeiro.</p>
    </footer>
  );
}

export default Footer;
