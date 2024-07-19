import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="h-screen text-orange-light text-center flex flex-col justify-center items-center gap-5 px-5 py-10 bg-[url('/guto.png')] bg-no-repeat bg-cover">
      <h1 className="text-4xl font-bold">Junte-se às Aventuras de Guto!</h1>
      <p>
        Acompanhe o Guto enquanto ele viaja pelo mundo e veja a emocionante
        jornada da construção do seu sítio! Inscreva-se agora para explorar
        destinos incríveis e se inspirar para suas próprias aventuras.
      </p>
      <Button className="bg-orange-primary w-full">Inscreva-se no canal</Button>
    </header>
  );
}

export default Header;
