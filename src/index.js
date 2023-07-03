import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';



const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Provider> */}
      <AppRouter/>
    {/* </Provider> */}
  </React.StrictMode>
);
