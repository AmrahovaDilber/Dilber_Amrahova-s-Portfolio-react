import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.js';
import { store } from './app/store.js';
import { Provider } from "react-redux";
import { server } from './services/server.js';
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes.js";


server();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
