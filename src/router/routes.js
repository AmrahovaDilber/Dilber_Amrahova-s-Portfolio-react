import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Inner from "../pages/Inner";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/inner",
    element: <Inner></Inner>
  },
]);

