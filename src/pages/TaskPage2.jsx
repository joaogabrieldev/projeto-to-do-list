import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { CircleChevronLeft } from "lucide-react";
import Layout from "../components/Layout"; // Importe o Layout

function TaskPage2() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    // O Layout já cria o fundo escuro e centraliza tudo
    <Layout>
      {/* Coloque seu conteúdo diretamente aqui, sem uma div extra com classes de layout */}

      {/* Cabeçalho */}
      <div className="relative mb-6 flex items-center justify-center">
        <Link
          to="/"
          className="absolute left-0 text-white hover:text-slate-300"
          onClick={() => navigate(-1)} // Uma forma melhor de voltar
        >
          <CircleChevronLeft className="h-8 w-8" />
        </Link>
        <h1 className="text-3xl font-semibold text-white">
          Detalhes da Tarefa
        </h1>
      </div>

      {/* Card de Conteúdo */}
      <div className="space-y-4 rounded-md bg-slate-200 p-6 text-slate-800 shadow-lg">
        <h2 className="border-b border-slate-300 pb-2 text-center text-2xl font-semibold">
          {title}
        </h2>
        <p className="pt-2 text-slate-600">{description}</p>
      </div>
    </Layout>
  );
}

export default TaskPage2;
