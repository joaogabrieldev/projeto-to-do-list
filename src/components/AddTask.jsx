import { Save } from "lucide-react";
import { useState } from "react";
import Input from "./Input";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div
      className="flex flex-col p-6 
    rounded-md bg-slate-200 mb-5 "
    >
      <div className="mb-4 ">
        <Input
          type="text"
          id="input-title"
          placeholder="Insira o Título da Tarefa"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>

      <div>
        <Input
          type="text"
          id="task-description"
          placeholder="Insira a Descrição da Tarefa"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
      </div>

      <div>
        <button
          type="button"
          className="mt-3 flex flex-row bg-slate-400 w-full text-center content-center justify-center p-2 rounded-md text-white font-semibold cursor-pointer"
          onClick={() => {
            if (!title.trim()) {
              // Adicionar API de mensagem de erro
              alert("Preencha o título da tarefa");
            }

            if (!description.trim()) {
              setDescription("Sem descrição");
            }

            props.onAddNewTaskSubmit(title, description);
            setDescription("");
            setTitle("");
          }}
        >
          <span className="mr-2 ">Adicionar Tarefa</span> <Save />
        </button>
      </div>
    </div>
  );
}

export default AddTask;
