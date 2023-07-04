import React from "react";
import HeaderStudents from "../headerStudents/HeaderStudents";
import FooterStudents from "../footerStudents/FooterStudents";
import {
  ContainerP,
  ContainerP2,
  ContainerP4,
  ContainerProgress,
  ContainerStateStudents,
  ContainerStep,
} from "./StyleStateStudents";

const StateStudents = () => {
  return (
    <div>
      <HeaderStudents />
      <ContainerStateStudents>
        <div>
          <h2>Estado</h2>
        </div>
        <ContainerProgress>
          <ContainerStep>
            <ContainerP>
              <div>
                <h3>Selección</h3>
                <p>
                  ¡Felicidades! Avanzaste al emocionante proceso de entrevista,
                  donde podrás compartir tus experiencias, habilidades y
                  motivaciones con los evaluadores. Sé auténtico/a y demuestra
                  lo mejor de ti. ¡Estamos ansiosos por presenciar tus logros!
                </p>
              </div>
              <div>
                <span>1</span>
                <hr />
              </div>
            </ContainerP>

            <ContainerP2>
              <div>
                <h3>Admitid@</h3>
                <p>
                  ¡Felicitaciones por tu admisión! Te damos una cálida
                  bienvenida a nuestro programa. Esperamos que aproveches al
                  máximo esta oportunidad y te deseamos mucho éxito en tu camino
                  hacia el crecimiento y el logro de tus metas. ¡Bienvenido/a a
                  nuestra comunidad
                </p>
              </div>
              <div>
                <span>2</span>
                <hr />
              </div>
            </ContainerP2>
            <ContainerP>
              <div>
                <h3>Formación</h3>
                <p>
                  En la etapa de formación, adquirirás conocimientos y
                  habilidades para tu crecimiento personal. Estaremos aquí para
                  apoyarte y proporcionarte las herramientas necesarias para tu
                  éxito. ¡Prepárate para expandir horizontes y alcanzar tu
                  máximo potencial!
                </p>
              </div>
              <div>
                <span>3</span>
                <hr />
              </div>
            </ContainerP>

            <ContainerP4>
              <div>
                <h3>Certificación</h3>
                <p>
                  Felicitaciones por tu éxito y dedicación en completar
                  exitosamente el proceso de certificación, sigue aprovechando
                  al máximo tu certificación y continúa destacando en tu
                  profesión. ¡Sigue adelante y sigue alcanzando nuevas metas en
                  tu trayectoria profesional!
                </p>
              </div>
              <div>
                <span>4</span>
              </div>
            </ContainerP4>
          </ContainerStep>
        </ContainerProgress>
      </ContainerStateStudents>
      <FooterStudents />
    </div>
  );
};

export default StateStudents;
