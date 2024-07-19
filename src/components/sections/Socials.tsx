import { InstagramEmbed } from "react-social-media-embed";

function Socials() {
  return (
    <section className="bg-orange-primary px-5 py-10 flex flex-col text-center text-orange-light gap-5">
      <p className="font-bold">REDES SOCIAIS</p>
      <p>Siga o Guto no Instagram!</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <InstagramEmbed
            url="https://www.instagram.com/aventurasdeguto/"
            width={328}
          />
        </div>
      </div>
    </section>
  );
}

export default Socials;
