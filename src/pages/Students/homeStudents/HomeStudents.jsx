import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  ButtonHomeStudents,
  ContainerHomeStudents,
  ContainerHomeStudentsCont,
} from "./StyleHomeStudents";
import HeaderStudents from "../headerStudents/HeaderStudents";
import FooterStudents from "../footerStudents/FooterStudents";
import ImgHome from "../../../assets/imageHomeStudents.png";
import { useNavigate } from "react-router-dom";

const HomeStudents = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    if (!user?.formularioLlenado) {
      navigate("/formStudents");
    }
  }, [user, navigate]);

  const handlePay = () => {
    navigate("/statestudents");
  };
  return (
    <ContainerHomeStudents>
<HeaderStudents/>
      <ContainerHomeStudentsCont>
        <div>
            <h2>
              ¡Bienvenid@ a Live!
              <br />
              Nos complace <br />
              enormemente que te <br />
              unas a nosotros en este <br />
              emocionante proceso. <br />
              Aquí, encontrarás <br />
              información detallada
              <br />
              sobre tu evolución en <br />
              cada fase de tu viaje.
              <br />
            </h2>
            </div>
          <section>
           
              <img src={ImgHome} alt="" />
          
          </section>
          </ContainerHomeStudentsCont>
        <ButtonHomeStudents>
          <button onClick={handlePay}>Ver proceso</button>
        </ButtonHomeStudents>
     
 <FooterStudents/>
    </ContainerHomeStudents>
  );
};

export default HomeStudents;
