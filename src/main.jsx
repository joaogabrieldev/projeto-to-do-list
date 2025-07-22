import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";
import TaskPage2 from "./pages/TaskPage2.jsx";

const router = createBrowserRouter([
  // 1º Objeto -> O que vai ser mostrado na página inicial
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task-details",
    element: <TaskPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Componente deve ser escrito EM LETRA MAIÚSCULA */}
    <RouterProvider router={router} />
  </StrictMode>
);
