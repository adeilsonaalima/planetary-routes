import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Planetary from "./planetary/planetary.jsx"
import "./styles/style.css"

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <StrictMode>
    <Planetary />
  </StrictMode>
);