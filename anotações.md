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
