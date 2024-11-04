import "../stylesheets/footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail, SiWhatsapp } from "react-icons/si";

function Section2() {
  return (
    <>
      <section className="footer_container">
        <div className="footer_container--div">
          <h4>Juan Design.</h4>
          <div>
            <div className="contact_icons">
              <a
                href="https://www.linkedin.com/in/juan-camilo-diaz-valencia-020840141"
                target="blank"
                aria-label="linkedin"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="contact_icons">
              <a href="mailto:juannavegante2010@gmail.com?subject=Greetings"
                  aria-label="E-mail">
                <SiGmail />
              </a>
            </div>
            <div className="contact_icons">
              <a
                href="https://api.whatsapp.com/send?phone=573008080525&text=Hola%20Juan%20D%C3%ADaz%2C%20vi%20tu%20web"
                target="blank"
                aria-label="whatsapp"
              >
                <SiWhatsapp />
              </a>
            </div>
            <div className="contact_icons">
              <a href="https://github.com/JuanDiaz1992" target="blank"
                aria-label="whatsapp"
                >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Section2;
