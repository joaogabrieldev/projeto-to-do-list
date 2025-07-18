## Exemplo de Estrutura React

```bash
import { useState } from "react";

function App() {
// State (Estados) -> Variável que é capaz de atualizar o componente

const [message, setMessage] = useState(
"Olá, mundo" -> Valor Inicial da Variável
);
// useState é um HOOK -> Função especial que permite o uso funcionalidades especiais que o React proporciona


  return (
    <div>
      <h1> {message}</h1>
      <button
        onClick={() => {
          setMessage("Outra Mensagem");
        }}
      >
        Mudar Mensagem
      </button>
    </div>
  );
}
export default App;
```

## Props

- Passar um valor para um componente

### Macete -> useState

- se a intenção quando a variável é alterada é modificar a interface, deve-se usar useState, se não, pode-se utilizar um useRef

-> por exemplo:

```bash
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação até certo tópico",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar React",
      description: "Estudar React até certo tópico",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Node",
      description: "Estudar Node até certo tópico",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Estudar JavaScript",
      description: "Estudar JavaScript até certo tópico",
      isCompleted: false,
    },
  ]);

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

  return (
    <div className="flex h-screen w-screen justify-center bg-slate-500 p-6">
      <div className="w-[500px]">
        <h1 className="text-center text-3xl text-slate-100 mb-1.5 font-semibold">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskRemoveClick={onTaskRemoveClick}
        />
      </div>
    </div>
  );
}
```

# Hooks -> O que são?

=> Hook como um "gancho" ou um "plug-in" que você pode usar para se conectar a funcionalidades internas do React.

-> Hooks são funções especiais que permitem que você utilize estado (state) e outros recursos do React dentro de componentes de função. Antes dos Hooks, essas funcionalidades estavam disponíveis apenas em componentes de classe.

1. `useState` -> O Hook de Estado
   Permite que você adicione uma variável de estado a um componente. Quando essa variável muda, o componente é renderizado novamente para refletir a mudança.

2. `useEffect` -> Função executada sempre que o valor que está entre colchetes for alterado

3. `localStorage` -> Memória do navegador que não se altera com novas renderizações
