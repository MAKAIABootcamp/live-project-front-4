import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import StudentsGeneral from './componentsGeneral/componentsSuperUser/StudentsOptions/StudentsGeneral';
import Selection from './componentsGeneral/componentsSuperUser/Selection/Selection';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Provider>
      <AppRouter/>
    </Provider> */}
   {/* <Selection /> */}
   <StudentsGeneral />
  </React.StrictMode>
);
