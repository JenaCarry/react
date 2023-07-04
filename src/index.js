import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { App } from "./App";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";
import { ContactDetails } from "./pages/ContactDetails";
import { Props } from "./pages/Props";
import { List } from "./pages/List";
import { Event } from "./pages/Event";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/props",
        element: <Props />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/list",
        element: <List />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/contact/:id",
        element: <ContactDetails />,
      },
      {
        path: "/profile",
        element: <Navigate to={"/contact"} />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
