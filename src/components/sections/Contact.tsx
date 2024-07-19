import { Mail01Icon, SmartPhone01Icon } from "hugeicons-react";

function Contact() {
  return (
    <section className="px-5 py-10 flex flex-col gap-5 text-center">
      <p className="font-bold text-blue-light">CONTATO</p>
      <p>Para parcerias e divulgações, entre em contato:</p>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="flex text-orange-primary">
          <Mail01Icon className="mr-[5px]" />
          <span className="text-[#000]">email@gmail.com</span>
        </div>
        <div className="flex text-orange-primary">
          <SmartPhone01Icon className="mr-[5px]" />
          <span className="text-[#000]">(99) 99999-9999</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
