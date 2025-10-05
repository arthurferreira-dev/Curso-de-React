import { ChevronRightIcon, Trash2 } from "lucide-react"
import { useNavigate } from "react-router-dom";
import IconsBtn from "./iconsLucide";

export default function Tasks({ tasks, onTaskClick, onTaskDeleted }) {
    const navigate = useNavigate();

    function onSeeDetails(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`)
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                    <li key={task.id} className="flex gap-2">
                        <button 
                            className={`bg-slate-400 text-left text-white p-2 rounded-md w-[100%] hover:cursor-pointer ${task.isCompleted && "line-through"}`}
                            onClick={() => onTaskClick(task.id)}
                        >
                            {task.title}
                        </button>

                        <IconsBtn
                            onClick={() => onSeeDetails(task)}
                        >
                            <ChevronRightIcon />
                        </IconsBtn>

                        <IconsBtn
                            onClick={() => onTaskDeleted(task.id)}
                        >
                            <Trash2 />
                        </IconsBtn>
                    </li>
                )
            )}
        </ul>
    );
}