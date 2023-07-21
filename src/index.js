
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import store from "./redux/store/store";

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <React.StrictMode>

    <Provider store ={store}>
      <AppRouter/>
    </Provider>
  </React.StrictMode>
); 
