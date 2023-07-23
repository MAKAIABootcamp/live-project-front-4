// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import HeaderSuperUser from '../headerSuperUser/HeaderSuperUser'
// import { DataHV, DataInfo } from '../Selection/SelectionStyle'
// import { DataProfileCertification, PhotoProfileCertification, ListInfoGeneral, ContentInfoCertified, MoreInfoAvatarCertified, DataHVCertified, ImageCelebration } from '../certification/CertificationStyle'

// const ProfileCertified = () => {

//   const navigate = useNavigate();

//   const backToListCertified = () => {
//     navigate("/listCertifiedSU")
//   }
//   return (
//     <>
//       <HeaderSuperUser />
//       <ListInfoGeneral>
//         <button onClick={backToListCertified}>
//           <img src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689531239/LIVE/Im%C3%A1genes/Icons/devolver_vmdk04.png" width={50} />
//         </button>
//         <ContentInfoCertified>
//           <div>
//             <PhotoProfileCertification>
//               <img src='https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689961606/LIVE/Im%C3%A1genes/PhotoProfiles/GOMES-BOLANOS-ROBERTO-2_hregxf.jpg' />

//             </PhotoProfileCertification>
//             <div>
//               <div></div>
//             </div>
//           </div>
//           <div>
//             <h2>Roberto Gómez Bolaños</h2>
//             <DataProfileCertification>
//               <DataInfo>
//                 <div>
//                   <h4>Tipo de ingreso:</h4>
//                   <p>Financiado por Comfama</p>
//                 </div>
//                 <div>
//                   <h4>Estado:</h4>
//                   <p>Certificado</p>
//                 </div>
//                 <div>
//                   <h4>Nacionalidad:</h4>
//                   <p>Mexicano</p>
//                 </div>
//               </DataInfo>
//               <DataInfo>
//                 <div>
//                   <h4>Correo:</h4>
//                   <p>elchavo8@gmail.com</p>
//                 </div>
//                 <div>
//                   <h4>Tipo de documento:</h4>
//                   <p>Cédula</p>
//                 </div>
//                 <div>
//                   <h4>Número de identificación:</h4>
//                   <p>1.234.567.890</p>
//                 </div>
//               </DataInfo>
//             </DataProfileCertification>
//           </div>
//         </ContentInfoCertified>
//         <MoreInfoAvatarCertified>
//           <h2>Información personal</h2>
//           <DataHVCertified>
//             <DataInfo>
//               <div>
//                 <h4>Canal de remisión:</h4>
//                 <p>Alcaldía de Medellín</p>
//               </div>
//               <div>
//                 <h4>Edad:</h4>
//                 <p> años</p>
//               </div>
//               <div>
//                 <h4>Número de celular:</h4>
//                 <p></p>
//               </div>
//               <div>
//                 <h4>Estrato socioeconómico:</h4>
//                 <p></p>
//               </div>
//               <div>
//                 <h4>Departamento y ciudad/municipio <br></br>en el que vive:</h4>
//                 <p></p>
//                 <p></p>
//               </div>
//               <div>
//                 <h4>Dirección de residencia:</h4>
//                 <p></p>
//               </div>
//             </DataInfo>
//             <DataInfo>
//               <div>
//                 <h4>Se reconoce como (grupo étnico):</h4>
//                 <p></p>
//               </div>
//               <div>
//                 <h4>Se identifica con la siguiente población:</h4>
//                 <p></p>
//               </div>
//               <div>
//                 <h4>Nombre y parentezco <br></br>del contacto de emergencia:</h4>
//                 <p></p>
//               </div>
//               <div>
//                 <h4>Teléfono del contacto de <br></br>emergencia:</h4>
//                 <p></p>
//               </div>
//               <div>
//                 <h4>Correo electrónico del <br></br> contacto de emergencia:</h4>
//                 <p></p>
//               </div>
//             </DataInfo>
//           </DataHVCertified>
//         </MoreInfoAvatarCertified>
//         <MoreInfoAvatarCertified>
//           <h2>Información académica y laboral</h2>
//           <DataHVCertified>
//             <DataInfo>
//               <div>
//                 <h4>Nivel educativo alcanzado (y si obtuvo, su título):</h4>
//                 <p></p>
//               </div>
//               <div>
//                 <h4>Ocupación actual:</h4>
//                 <p></p>
//               </div>
//               <div>
//                 <h4>Estrato socioeconómico:</h4>
//                 <p></p>
//               </div>
//               <div>
//                 <h4>Trabaja/estudia en:</h4>
//                 <p></p>
//               </div>
//               <div>
//                 <h4>Se reconoce como (grupo étnico):</h4>
//                 <p></p>
//               </div>
//             </DataInfo>
//             <DataInfo>
//               <div>
//                 <h4>Se identifica con la siguiente población:</h4>
//                 <p></p>
//               </div>
//               <div>
//                 <h4>Nombre y parentezco <br></br>del contacto de emergencia:</h4>
//                 <p></p>
//               </div>
//               <div>
//                 <h4>Teléfono del contacto de <br></br>emergencia:</h4>
//                 <p></p>
//               </div>
//               <div>
//                 <h4>Correo electrónico del <br></br> contacto de emergencia:</h4>
//                 <p></p>
//               </div>
//             </DataInfo>
//           </DataHVCertified>
//         </MoreInfoAvatarCertified>
//         <MoreInfoAvatarCertified>
//           <h2>Hobbies y pasatiempos</h2>
//           <DataHVCertified>
//             <DataInfo>
//               <div>
//                 <h4>Ocupa su tiempo libre en:</h4>
//                 <p></p>
//               </div>
//               <div>
//                 <h4>La actividad que más disfruta realizar:</h4>
//                 <p></p>
//               </div>
//             </DataInfo>
//             <DataInfo>
//               <div>
//                 <h4>Grupo o comunidad a la cual pertenece:</h4>
//               </div>
//             </DataInfo>
//           </DataHVCertified>
//         </MoreInfoAvatarCertified>
//         <br></br>
//         <br></br>
//         <br></br>
//       </ListInfoGeneral>
//     </>
//   )
// }

// export default ProfileCertified



import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeaderSuperUser from '../headerSuperUser/HeaderSuperUser';
import { DataHV, DataInfo } from '../Selection/SelectionStyle';
import { DataProfileCertification, PhotoProfileCertification, ListInfoGeneral, ContentInfoCertified, MoreInfoAvatarCertified, DataHVCertified, ImageCelebration } from '../certification/CertificationStyle';

const ProfileCertified = () => {
  const location = useLocation();
  const selectedPerson = location.state?.selectedPerson;
  const infoPersonal = location.state?.infoPersonal;
  const courseData = location.state?.courseData;
  const courseTitle = location.state?.courseTitle;

  const navigate = useNavigate();

  const backToListCertified = () => {
    // Utiliza window.history.back() para regresar a la página anterior
    window.history.back();
  };

  return (
    <>
      <HeaderSuperUser />
      <ListInfoGeneral>
        <button onClick={backToListCertified}>
          <img src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689531239/LIVE/Im%C3%A1genes/Icons/devolver_vmdk04.png" width={50} alt="Volver" />
        </button>
        <ContentInfoCertified>
          <div>
            <PhotoProfileCertification>
              <img src={selectedPerson.profile} alt={selectedPerson.name} />
            </PhotoProfileCertification>
            <div>
              <div></div>
            </div>
          </div>
          <div>
            <h2 key={selectedPerson.id}>{selectedPerson.name}</h2>
            <DataProfileCertification>
            {selectedPerson.infoPersonal.map((data) => (
              <>
              <DataInfo>
                <div>
                  <h4>Tipo de ingreso:</h4>
                  <p>{data.typeIncome}</p>
                </div>
                <div>
                  <h4>Estado:</h4>
                  <p>{data.status}</p>
                </div>
                <div>
                  <h4>Nacionalidad:</h4>
                  <p>{data.nationality}</p>
                </div>
              </DataInfo>
              <DataInfo>
                <div>
                  <h4>Correo:</h4>
                  <p>{data.email}</p>
                </div>
                <div>
                  <h4>Tipo de documento:</h4>
                  <p></p>
                </div>
                <div>
                  <h4>Número de identificación:</h4>
                  <p></p>
                </div>
              </DataInfo>
              </>
            ))}
            </DataProfileCertification>
          </div>
        </ContentInfoCertified>
        <MoreInfoAvatarCertified>
          <h2>Información personal</h2>
          <DataHVCertified>
            {selectedPerson.infoPersonal.map((data) => (
              <>
                <DataInfo key={data.id}>
                  <div>
                    <h4>Canal de remisión:</h4>
                    <p>{data.remissionChannel}</p>
                  </div>
                  <div>
                    <h4>Edad:</h4>
                    <p>{data.age} años</p>
                  </div>
                  <div>
                    <h4>Número de celular:</h4>
                    <p>{data.celphone}</p>
                  </div>
                  <div>
                    <h4>Estrato socioeconómico:</h4>
                    <p></p>
                  </div>
                  <div>
                    <h4>Departamento y ciudad/municipio <br></br>en el que vive:</h4>
                    <p></p>
                    <p></p>
                  </div>
                  <div>
                    <h4>Dirección de residencia:</h4>
                    <p></p>
                  </div>
                </DataInfo>
                <DataInfo>
                  <div>
                    <h4>Se reconoce como (grupo étnico):</h4>
                    <p></p>
                  </div>
                  <div>
                    <h4>Se identifica con la siguiente población:</h4>
                    <p></p>
                  </div>
                  <div>
                    <h4>Nombre y parentezco <br></br>del contacto de emergencia:</h4>
                    <p></p>
                  </div>
                  <div>
                    <h4>Teléfono del contacto de <br></br>emergencia:</h4>
                    <p></p>
                  </div>
                  <div>
                    <h4>Correo electrónico del <br></br> contacto de emergencia:</h4>
                    <p></p>
                  </div>
                </DataInfo>
              </>
            ))}
          </DataHVCertified>
        </MoreInfoAvatarCertified>
        <MoreInfoAvatarCertified>
          <h2>Información académica y laboral</h2>
          <DataHVCertified>
            {selectedPerson.infoPersonal.map((data) => (
              <>
                <DataInfo>
                  <div>
                    <h4>Nivel educativo alcanzado (y si obtuvo, su título):</h4>
                    <p></p>
                  </div>
                  <div>
                    <h4>Ocupación actual:</h4>
                    <p></p>
                  </div>
                  <div>
                    <h4>Estrato socioeconómico:</h4>
                    <p></p>
                  </div>
                  <div>
                    <h4>Trabaja/estudia en:</h4>
                    <p></p>
                  </div>
                  <div>
                    <h4>Se reconoce como (grupo étnico):</h4>
                    <p></p>
                  </div>
                </DataInfo>
                <DataInfo>
                  <div>
                    <h4>Se identifica con la siguiente población:</h4>
                    <p></p>
                  </div>
                  <div>
                    <h4>Nombre y parentezco <br></br>del contacto de emergencia:</h4>
                    <p></p>
                  </div>
                  <div>
                    <h4>Teléfono del contacto de <br></br>emergencia:</h4>
                    <p></p>
                  </div>
                  <div>
                    <h4>Correo electrónico del <br></br> contacto de emergencia:</h4>
                    <p></p>
                  </div>
                </DataInfo>
              </>
            ))}
          </DataHVCertified>
        </MoreInfoAvatarCertified>
        <MoreInfoAvatarCertified>
          <h2>Hobbies y pasatiempos</h2>
          <DataHVCertified>
            {selectedPerson.infoPersonal.map((data) => (
              <>
                <DataInfo>
                  <div>
                    <h4>Ocupa su tiempo libre en:</h4>
                    <p></p>
                  </div>
                  <div>
                    <h4>La actividad que más disfruta realizar:</h4>
                    <p></p>
                  </div>
                </DataInfo>
                <DataInfo>
                  <div>
                    <h4>Grupo o comunidad a la cual pertenece:</h4>
                  </div>
                </DataInfo>
              </>
            ))}
          </DataHVCertified>
        </MoreInfoAvatarCertified>
        <br />
        <br />
        <br />
      </ListInfoGeneral>
    </>
  );
};

export default ProfileCertified;
