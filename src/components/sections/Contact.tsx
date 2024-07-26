import { SmartPhone01Icon } from "hugeicons-react";
import ShowOnScroll from "../animations/ShowOnScroll";

function Contact() {
  return (
    <section
      id="contato"
      className="px-5 py-10 flex flex-col gap-5 text-center lg:py-20 lg:px-80"
    >
      <ShowOnScroll>
        <p className="font-bold text-secondary">ENTRE EM CONTATO</p>
      </ShowOnScroll>
      <ShowOnScroll>
        <p>
          Tem alguma dúvida ou deseja colaborar com a gente? Entre em contato
          para parcerias, divulgações ou qualquer outra questão. Estamos sempre
          abertos a novas oportunidades e adoraríamos ouvir de você!
        </p>
      </ShowOnScroll>
      <ShowOnScroll>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex text-primary text-xl justify-center items-center">
            <SmartPhone01Icon className="mr-[5px] h-8 w-8" />
            <span className="text-[#000] font-bold">(35) 99824-3738</span>
          </div>
        </div>
      </ShowOnScroll>
    </section>
  );
}

export default Contact;
