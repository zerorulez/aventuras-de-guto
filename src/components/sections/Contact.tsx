import { SmartPhone01Icon } from "hugeicons-react";

function Contact() {
  return (
    <section
      id="contato"
      className="px-5 py-10 flex flex-col gap-5 text-center"
    >
      <p className="font-bold text-secondary">CONTATO</p>
      <p>Para parcerias e divulgações, entre em contato:</p>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="flex text-primary">
          <SmartPhone01Icon className="mr-[5px]" />
          <span className="text-[#000]">(99) 99999-9999</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
