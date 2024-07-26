import { Button } from "@/components/ui/button";
import clsx from "clsx";
import ShowOnScroll from "../animations/ShowOnScroll";

function Header() {
  return (
    <header
      id="cabecalho"
      className={clsx(
        "h-screen text-primary-foreground text-center flex flex-col justify-center items-center gap-5 px-5 py-10 bg-[url('/guto.png')] bg-no-repeat bg-cover",
        "lg:px-96"
      )}
    >
      <ShowOnScroll>
        <h1 className="text-4xl font-bold">Junte-se às Aventuras de Guto!</h1>
      </ShowOnScroll>
      <ShowOnScroll delay={0.2}>
        <p>
          Bem-vindo à Aventuras de Guto, o canal do YouTube onde a exploração e
          a diversão não têm limites! Se você é apaixonado por viagens,
          motorhomes e descobertas ao redor do mundo, você está no lugar certo.
          Acompanhe o Guto enquanto ele viaja pelo Brasil, explora países
          incríveis e está em processo de construir o camping dos sonhos.
        </p>
      </ShowOnScroll>
      <ShowOnScroll className="w-full lg:w-auto" delay={0.3}>
        <a
          href="https://www.youtube.com/@AventurasdeGuto?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:w-auto"
        >
          <Button className="w-full lg:w-auto lg:h-14 lg:w-96">
            Inscreva-se no canal
          </Button>
        </a>
      </ShowOnScroll>
    </header>
  );
}

export default Header;
