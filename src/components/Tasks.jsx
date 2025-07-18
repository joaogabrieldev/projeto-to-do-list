import { ChevronRightIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks(props) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    // Uso de Query Params
    const query = new URLSearchParams();

    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/task-details?${query.toString()}`);
  }

  return (
    <div className="rounded-md bg-slate-200 shadow">
      <h1 className="flex justify-center content-center pt-4 mt-4 mb-[-4px] text-2xl  font-semibold text-stone-800">
        Tarefas
      </h1>
      <ul className="space-y-4 rounded-md p-6 ">
        {props.tasks.map((task) => {
          return (
            <li key={task.id} className="flex gap-2">
              <button
                type="button"
                onClick={() => props.onTaskClick(task.id)}
                // "
                className={`rounded-md font-semibold text-left bg-slate-400 p-2 text-white w-full cursor-pointer ${
                  task.isCompleted && "line-through"
                }`}
              >
                {task.title}
              </button>

              <Button
                type="button"
                onClick={() => props.onTaskRemoveClick(task.id)}
                className="p-1 rounded-md bg-slate-400 text-white cursor-pointer"
              >
                <abbr title="Deletar Tarefa">
                  <Trash2 />
                </abbr>
              </Button>

              <Button type="button" onClick={() => onSeeDetailsClick(task)}>
                <abbr title="Voltar para a Página Inicial">
                  <ChevronRightIcon />
                </abbr>
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Tasks;
