import TaskForm from "./components/task-form";
import AddTask from "./components/AddTask";

function App() {
  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <AddTask />
      <TaskForm />
    </div>
  );
}

export default App;
