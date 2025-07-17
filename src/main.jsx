import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Componente deve ser escrito EM LETRA MAIÚSCULA */}
    <App />
  </StrictMode>
);
