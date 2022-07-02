import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Rotas from "./routes.js";
import "./styles/style.css"

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <StrictMode>
    <Rotas />
  </StrictMode>
);