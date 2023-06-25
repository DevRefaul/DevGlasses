import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes.jsx";
import "./index.css";
import DataContext from "./Contexts/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContext>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </DataContext>
  </React.StrictMode>
);
