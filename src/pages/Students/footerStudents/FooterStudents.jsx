import React from "react";
import { Footer, SectionDerechos, SectionIconos } from "./StyledFooterStudents";
import twiter from "../../../assets/icons8-twitter-48.png";
import facebook from "../../../assets/icons8-facebook-48.png";
import linkend from "../../../assets/icons8-linkedin-48.png";
import play from "../../../assets/icons8-youtube-play-48.png";
import { NavLink } from "react-router-dom";

const FooterStudents = () => {
  return (
    <Footer>
      <SectionDerechos>
        &copy; 2023 Todos los derechos reservados
      </SectionDerechos>
      <SectionIconos>
        <figure>
          <NavLink to="https://twitter.com/i/flow/login?redirect_after_login=%2FMakaiaorg">
            <img src={twiter} alt="twiter" />
          </NavLink>
        </figure>

        <figure>
          <NavLink to="https://www.facebook.com/Makaiaorg?_rdc=1&_rdr">
            <img src={facebook} alt="facebook" />
          </NavLink>
        </figure>

        <figure>
          <NavLink to="https://www.linkedin.com/company/makaia/mycompany/">
            <img src={linkend} alt="linkend" />
          </NavLink>
        </figure>

        <figure>
          <NavLink to="https://www.youtube.com/channel/UCSwYcQxM_DyO_VNqglgmvzQ">
            <img src={play} alt="youtube" />
          </NavLink>
        </figure>
      </SectionIconos>
    </Footer>
  );
};

export default FooterStudents;