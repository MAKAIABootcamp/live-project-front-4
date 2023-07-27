import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import cohete from "../../../assets/rocket-outline.svg";
import { getStudentActionAsync } from "../../../redux/actions/studentAction";

const StateStudents = () => {

  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const { student } = useSelector((store) => store.student);
  console.log(student.estado);

  // const [selectedStates, setSelectedStates] = useState([]);

  useEffect(() => {
    dispatch(getStudentActionAsync(user.uid));
  },[dispatch, user.uid])

  // const handleStateChange = (event) => {
  //   const newState = event.target.value;

  //   if (!selectedStates.includes(newState)) {
  //     setSelectedStates([...selectedStates, newState]);
  //   }
  // };

  return (
    <>
      <HeaderStudents />
      <ContainerStateStudents>
        <section>
          <h2>Estado</h2>
          {/* <form action="">
            <label htmlFor="">Estado estudiante</label>
            <select name="" id="" onChange={handleStateChange}>
              <option value="Selecciona un estado">Selecciona un estado</option>
              <option value="Selección">Selección</option>
              <option value="Admitid@">Admitid@</option>
              <option value="Formación">Formación</option>
              <option value="Certificación">Certificación</option>
            </select>
          </form> */}
        </section>
        <ContainerProgress>
          <ContainerStep>
            <ContainerP
              active={
                student &&
                Object.entries(student).length &&
                student?.estado.includes("Certificación")
              }
            >
              <section>
                <h3>Certificación</h3>
                <p>
                  Felicitaciones por tu éxito y dedicación en completar
                  exitosamente el proceso de certificación, sigue aprovechando
                  al máximo tu certificación y continúa destacando en tu
                  profesión. ¡Sigue adelante y sigue alcanzando nuevas metas en
                  tu trayectoria profesional!
                </p>
              </section>
              <section>
                <span>
                  4 <img src={cohete} alt="" />
                </span>
                <hr />
              </section>
            </ContainerP>

            <ContainerP2
              active={
                student &&
                Object.entries(student).length &&
                student?.estado.includes("Formación")
              }
            >
              <section>
                <h3>Formación</h3>
                <p>
                  En la etapa de formación, adquirirás conocimientos y
                  habilidades para tu crecimiento personal. Estaremos aquí para
                  apoyarte y proporcionarte las herramientas necesarias para tu
                  éxito. ¡Prepárate para expandir horizontes y alcanzar tu
                  máximo potencial!
                </p>
              </section>
              <section>
                <span>
                  3 <img src={cohete} alt="" />
                </span>
                <hr />
              </section>
            </ContainerP2>
            <ContainerP
              active={
                student &&
                Object.entries(student).length &&
                student?.estado.includes("Admitid@")
              }
            >
              <section>
                <h3>Admitid@</h3>
                <p>
                  ¡Felicitaciones por tu admisión! Te damos una cálida
                  bienvenida a nuestro programa. Esperamos que aproveches al
                  máximo esta oportunidad y te deseamos mucho éxito en tu camino
                  hacia el crecimiento y el logro de tus metas. ¡Bienvenido/a a
                  nuestra comunidad!
                </p>
              </section>
              <section>
                <span>
                  2<img src={cohete} alt="" />
                </span>
                <hr />
              </section>
            </ContainerP>

            <ContainerP4
              active={
                student &&
                Object.entries(student).length &&
                student?.estado.includes("selección")
              }
            >
              <section>
                <h3>Selección</h3>
                <p>
                  ¡Felicidades! Avanzaste al emocionante proceso de entrevista,
                  donde podrás compartir tus experiencias, habilidades y
                  motivaciones con los evaluadores. Sé auténtico/a y demuestra
                  lo mejor de ti. ¡Estamos ansiosos por presenciar tus logros!
                </p>
              </section>
              <section>
                <span>
                  1<img src={cohete} alt="" />
                </span>
              </section>
            </ContainerP4>
          </ContainerStep>
        </ContainerProgress>
      </ContainerStateStudents>
      <FooterStudents />
    </>
  );
};

export default StateStudents;

