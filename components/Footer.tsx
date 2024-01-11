import MarlinLogoSvg from "@/svgs/MarlinLogoSvg";
import fb from "@/assets/fb.png";
import insta from "@/assets/insta.png";
import youtube from "@/assets/youtube.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div
        className="container-small footer__container"
        style={{ paddingBottom: "70px" }}
      >
        <a href="#" className="footer__logo" data-aos="fade-in">
          <MarlinLogoSvg />
        </a>
        <ul className="footer__links">
          <li data-aos="fade-right" data-aos-delay={200}>
            <a href="#">
              <Image src={fb} alt="" />
            </a>
          </li>
          <li data-aos="fade-in" data-aos-delay={200}>
            <a href="#">
              <Image src={insta} alt="" />
            </a>
          </li>
          <li data-aos="fade-left" data-aos-delay={200}>
            <a href="#">
              <Image src={youtube} alt="" />
            </a>
          </li>
        </ul>
        <p data-aos="fade-in" data-aos-delay={400}>
          All rights reserved Copyright &copy; Marlin 2023.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
