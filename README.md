# 📋 Gerenciador de Tarefas - React

**Sobre o Projeto:** Um aplicativo de gerenciamento de tarefas desenvolvido com React, oferecendo uma interface intuitiva para criar, gerenciar e acompanhar suas tarefas diárias.

## 🌟 **Versão Ativa**

**Clique aqui para testar:** [(https://projeto-to-do-list-seven.vercel.app/)](https://projeto-to-do-list-seven.vercel.app)

---

## 🚀 Tecnologias Utilizadas

### **Frontend**
- **React 18.3.1** - Biblioteca para construção de interfaces de usuário
- **React Router DOM 7.7.0** - Roteamento para aplicações React
- **TailwindCSS 4.1.11** - Framework CSS utilitário para estilização
- **Lucide React 0.525.0** - Biblioteca de ícones modernos
- **UUID 11.1.0** - Geração de identificadores únicos

### **Ferramentas de Desenvolvimento**
- **Vite 5.4.1** - Build tool e dev server
- **TypeScript** - Tipagem estática (configurado)
- **ESLint** - Linting de código

## 🏗️ Arquitetura do Projeto

### **Estrutura de Pastas**
```
src/
├── components/         # Componentes reutilizáveis
│   ├── AddTask.jsx     # Formulário para adicionar tarefas
│   ├── Button.jsx      # Componente de botão
│   ├── Input.jsx       # Componente de input
│   ├── Tasks.jsx       # Lista de tarefas
│   ├── Title.jsx       # Componente de título
│   └── task-list.jsx   # Lista de tarefas (alternativo)
├── pages/              # Páginas da aplicação
│   └── TaskPage.jsx    # Página principal de tarefas
├── App.jsx             # Componente principal
├── main.jsx            # Ponto de entrada
└── index.css           # Estilos globais
```

## 🎯 Funcionalidades

### **Principais Recursos**
- ✅ **Criar tarefas** com título e descrição
- ✅ **Marcar como concluída** com toggle visual
- ✅ **Excluir tarefas** da lista
- ✅ **Persistência local** usando localStorage
- ✅ **Interface responsiva** com TailwindCSS
- ✅ **Componentização** modular e reutilizável

### **Estado da Aplicação**
- Gerenciamento de estado com `useState`
- Persistência automática no localStorage
- Estrutura de dados otimizada para tarefas

## 🛠️ Padrões de Projeto

### **Componentização**
- **Componentes funcionais** com hooks
- **Separação de responsabilidades** por componente
- **Props para comunicação** entre componentes
- **Composição de componentes** para reutilização

### **Gerenciamento de Estado**
```javascript
// Exemplo de estrutura de tarefa
{
  id: "uuid-gerado",
  title: "Título da tarefa",
  description: "Descrição da tarefa",
  isCompleted: false
}
```

### **Hooks Utilizados**
- `useState` - Gerenciamento de estado local
- `useEffect` - Efeitos colaterais e sincronização
- `localStorage` - Persistência de dados

## 🚀 Como Executar

### **Pré-requisitos**
- Node.js (versão 16 ou superior)
- npm ou yarn

### **Instalação**
```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Entre na pasta do projeto
cd bootcamp-self-checkout-REACT

# Instale as dependências
npm install
```

### **Executando o Projeto**
```bash
# Modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint
```

## 📱 Responsividade

O projeto foi desenvolvido com foco na responsividade:
- **Mobile-first** approach
- **Breakpoints** do TailwindCSS
- **Layout adaptativo** para diferentes tamanhos de tela

## 🎨 Estilização

### **TailwindCSS**
- Classes utilitárias para estilização rápida
- Sistema de cores consistente
- Componentes responsivos
- Customização através de configuração

### **Design System**
- Cores: Slate (cinza) como base
- Tipografia: Hierarquia clara de títulos
- Espaçamento: Sistema consistente de padding/margin
- Interações: Estados hover e focus

## 🔧 Configurações

### **Vite**
- Configuração otimizada para React
- Hot Module Replacement (HMR)
- Build otimizado para produção

### **TypeScript**
- Configuração básica para tipagem
- Suporte a JSX
- Verificação de tipos

## 📚 Aprendizados do Projeto

### **Conceitos React Aplicados**
- **Componentes funcionais** e hooks
- **Props e comunicação** entre componentes
- **Estado local** e gerenciamento
- **Efeitos colaterais** com useEffect
- **Renderização condicional**

### **Padrões de Desenvolvimento**
- **Componentização** modular
- **Separação de responsabilidades**
- **Código limpo** e legível
- **Reutilização** de componentes

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
