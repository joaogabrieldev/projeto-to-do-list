import { useNavigate, useSearchParams } from "react-router-dom";
import { CircleChevronLeft } from "lucide-react";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen justify-center bg-slate-500 p-6 space-y-4">
      <div className="flex flex-row justify-center  content-center ">
        <CircleChevronLeft
          className="text-white mt-2 mr-2 text-3xl cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />

        <Title>Detalhes da Tarefa</Title>
      </div>
      <div className="bg-slate-200 rounded-md p-6 w-[500px] h-auto block m-auto space-y-3">
        <h1 className="text-center text-2xl font-semibold text-slate-700">
          {title}
        </h1>
        <p className="text-slate-700">{description}</p>
      </div>
    </div>
  );
}

export default TaskPage;
