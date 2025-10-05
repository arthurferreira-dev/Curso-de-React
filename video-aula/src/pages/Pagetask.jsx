import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom"
import Title from "../components/title";

export function TaskPage() {
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const desc = searchParams.get("description");
    const navigate = useNavigate();

    return (
        <div className="w-screen h-screen bg-slate-500 p-6">
            <div className="w-[500px] max-[512px]:w-[250px] m-auto space-y-4">
                <div className="flex justify-center relative mb-6">
                    <button 
                        onClick={() => navigate(-1)}
                        className="absolute left-0 top-0 bottom-0 hover:cursor-pointer"
                    >
                        <ChevronLeftIcon/>
                    </button>
                    <Title>
                        Detalhes da Tarefa
                    </Title>
                </div>

                <div className="bg-slate-600 p-4 rounded-md">
                    <h2 className="text-xl text-white font-bold mb-2">
                        {title}
                    </h2>
                    <p className="text-white">{desc}</p>
                </div>
            </div>
        </div>
    )
}