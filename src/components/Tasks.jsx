import { ArrowRight } from "lucide-react";

function Tasks(props) {
  // biome-ignore lint/suspicious/noConsole: false
  console.log(props);
  return (
    <div>
      <ul className="space-y-4 rounded-md bg-slate-200 p-6 shadow">
        {props.tasks.map((task) => {
          return (
            <li className="flex gap-2" key={task.id}>
              <button className="rounded-md font-semibold text-left bg-slate-400 p-2 text-white w-full">
                {task.title}
              </button>

              <button
                type="button"
                className="p-1 rounded-md bg-slate-400 text-white"
              >
                <ArrowRight></ArrowRight>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Tasks;
