import { useState } from "react";
import {
  Backpack01Icon,
  YoutubeIcon,
  ParaglidingIcon,
  CamperIcon,
} from "hugeicons-react";
import ShowOnScroll from "../animations/ShowOnScroll";

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
      name: "VÔO LIVRE E PARAMOTOR",
    },
    {
      icon: <CamperIcon size="50" />,
      name: "AVENTUREIRO",
    },
  ]);
  return (
    <section
      className="text-center px-5 py-10 gap-5 flex flex-col lg:px-80 lg:py-20"
      id="sobre"
    >
      <ShowOnScroll>
        <p className="text-secondary font-bold">SOBRE</p>
      </ShowOnScroll>
      <ShowOnScroll>
        <h3 className="text-4xl text-primary font-bold">Chora o pau!</h3>
      </ShowOnScroll>
      <ShowOnScroll>
        <p>
          Você está prestes a embarcar em uma jornada emocionante com Guto, o
          aventureiro apaixonado por explorar o mundo e compartilhar suas
          descobertas com você! Aqui, você vai conhecer não apenas um viajante,
          mas um explorador que vive cada experiência ao máximo e te convida a
          fazer parte dessa incrível jornada.
        </p>
      </ShowOnScroll>
      <ShowOnScroll horizontal>
        <div className="flex flex-col gap-10 py-5 justify-center lg:flex-row">
          {attributes.map((attribute, index) => (
            <div
              className="flex flex-col items-center text-primary"
              key={index}
            >
              <div>{attribute.icon}</div>
              <p className="font-bold">{attribute.name}</p>
            </div>
          ))}
        </div>{" "}
      </ShowOnScroll>
    </section>
  );
}

export default About;
