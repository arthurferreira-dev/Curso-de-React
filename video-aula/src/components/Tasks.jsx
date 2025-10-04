import { ChevronRightIcon, Trash2 } from "lucide-react"
import { useNavigate } from "react-router-dom";

export default function Tasks({ tasks, onTaskClick, onTaskDeleted }) {
    const iconsLucideCL = 'bg-slate-400 duration-300 p-2 rounded-md text-white hover:cursor-pointer hover:bg-slate-500';
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

                        <button 
                            className={iconsLucideCL}
                            onClick={() => onSeeDetails(task)}
                        >
                            <ChevronRightIcon />
                        </button>

                        <button 
                            className={iconsLucideCL}
                            onClick={() => onTaskDeleted(task.id)}
                        >
                            <Trash2 />
                        </button>
                    </li>
                )
            )}
        </ul>
    );
}