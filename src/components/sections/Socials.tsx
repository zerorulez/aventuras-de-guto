import { InstagramEmbed } from "react-social-media-embed";
import ShowOnScroll from "../animations/ShowOnScroll";

function Socials() {
  return (
    <section
      id="social"
      className="bg-primary px-5 py-10 flex flex-col text-center text-primary-foreground gap-5 lg:py-20 lg:px-80"
    >
      <ShowOnScroll>
        <p className="font-bold">REDES SOCIAIS</p>
      </ShowOnScroll>
      <ShowOnScroll>
        <p>
          Para uma dose diária de inspiração e atualizações em tempo real, siga
          o Guto no Instagram. Descubra fotos incríveis, stories dos bastidores
          e muito mais sobre as aventuras e a construção do camping.
        </p>
      </ShowOnScroll>
      <ShowOnScroll horizontal>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/aventurasdeguto/"
              width={328}
            />
          </div>
        </div>
      </ShowOnScroll>
    </section>
  );
}

export default Socials;
