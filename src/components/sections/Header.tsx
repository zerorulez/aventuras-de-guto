import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header
      id="cabecalho"
      className="h-screen text-primary-foreground text-center flex flex-col justify-center items-center gap-5 px-5 py-10 bg-[url('/guto.png')] bg-no-repeat bg-cover"
    >
      <h1 className="text-4xl font-bold">Junte-se às Aventuras de Guto!</h1>
      <p>
        Acompanhe o Guto enquanto ele viaja pelo mundo e veja a emocionante
        jornada da construção do seu sítio! Inscreva-se agora para explorar
        destinos incríveis e se inspirar para suas próprias aventuras.
      </p>
      <a
        href="https://www.youtube.com/@AventurasdeGuto?sub_confirmation=1"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <Button className="w-full">Inscreva-se no canal</Button>
      </a>
    </header>
  );
}

export default Header;
