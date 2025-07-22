import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import { data } from "react-router-dom";
import Title from "./components/Title";
import Layout from "./components/Layout";

// Componente Pai
function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    //1º -> Chamar a API
    // async function fetchTasks() {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/todos?_limit=10",
    //     {
    //       method: "GET",
    //     }
    //   );
    //   //2º -> Pegar os dados que ela retorna
    //   const data = await response.json();
    //   console.log(data);
    //   /*3º -> Armazenar/Persistir esses dados no State*/
    //   setTasks(data);
    // }
    //' Se quiser, pode-se usar uma API para pegar as tarefas, para testes e enfim
    // fetchTasks();
  }, []);

  function onTaskClick(taskID) {
    const newTasks = tasks.map((task) => {
      // Preciso atualizar essa tarefa
      if (task.id == taskID) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }

      // Não preciso atualizar essa tarefa
      return task;
    });

    setTasks(newTasks);
  }

  function onTaskRemoveClick(taskID) {
    const newRemoveTask = tasks.filter((task) => task.id != taskID);

    setTasks(newRemoveTask);
  }

  function onAddNewTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      description,
      title,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="flex min-h-screen w-full justify-center bg-slate-500 p-4 sm:p-6">
      <div className="w-full sm:max-w-[500px]">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddNewTaskSubmit={onAddNewTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskRemoveClick={onTaskRemoveClick}
        />
      </div>
    </div>
  );
}

export default App;
