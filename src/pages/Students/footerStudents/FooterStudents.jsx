import React from 'react'
import { Footer, SectionDerechos, SectionIconos } from './StyledFooterStudents'
import twiter from '../../../assets/icons8-twitter-48.png'
import facebook from '../../../assets/icons8-facebook-48.png'
import linkend from '../../../assets/icons8-linkedin-48.png'
import play from '../../../assets/icons8-youtube-play-48.png'

const FooterStudents = () => {
  return (
    <Footer>
      <SectionDerechos>
      &copy; 2023  Todos los derechos reservados
      </SectionDerechos>
      <SectionIconos>
        <figure>
          <img src={twiter} alt="" />
        </figure>
        <figure>
          <img src={facebook} alt="" />
        </figure>
        <figure>
          <img src={linkend} alt="" />
        </figure>
        <figure>
          <img src={play} alt="" />
        </figure>
      </SectionIconos>

    </Footer>
  )
}

export default FooterStudents 