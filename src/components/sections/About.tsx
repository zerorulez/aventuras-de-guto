import { useState } from "react";
import {
  Backpack01Icon,
  YoutubeIcon,
  ParaglidingIcon,
  CamperIcon,
} from "hugeicons-react";

function About() {
  const [attributes] = useState([
    {
      icon: <Backpack01Icon size="50" />,
      name: "12 PAÍSES",
    },
    {
      icon: <YoutubeIcon size="50" />,
      name: "+460K INSCRITOS",
    },
    {
      icon: <ParaglidingIcon size="50" />,
      name: "PILOTO DE VÔO LIVRE E PARAMOTOR",
    },
    {
      icon: <CamperIcon size="50" />,
      name: "AVENTUREIRO",
    },
  ]);
  return (
    <section className="text-center px-5 py-10 gap-5 flex flex-col">
      <p className="text-blue-light font-bold">SOBRE</p>
      <h3 className="text-4xl text-orange-primary font-bold">
        Bem-vindo ao universo de Aventuras do Guto!
      </h3>
      <p>
        Você está prestes a embarcar em uma jornada emocionante com Guto, o
        aventureiro apaixonado por explorar o mundo e compartilhar suas
        descobertas com você! Aqui, você vai conhecer não apenas um viajante,
        mas um explorador que vive cada experiência ao máximo e te convida a
        fazer parte dessa incrível jornada.
      </p>
      <div className="flex flex-col gap-10 py-5">
        {attributes.map((attribute) => (
          <div className="flex flex-col items-center text-orange-primary">
            <div>{attribute.icon}</div>
            <p className="font-bold">{attribute.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
