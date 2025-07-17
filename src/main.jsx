import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import TaskForm from "./components/task-form.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Componente deve ser escrito EM LETRA MAIÚSCULA */}
    <App />
    <TaskForm />
  </StrictMode>
);
