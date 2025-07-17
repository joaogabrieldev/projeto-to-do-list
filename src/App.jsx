import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar React",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Node",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Estudar JavaScript",
      isCompleted: false,
    },
  ]);
  return (
    <div className="flex h-screen w-screen justify-center bg-slate-500 p-6">
      <div className="w-[500px]">
        <h1 className="text-center text-3xl text-slate-100">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
