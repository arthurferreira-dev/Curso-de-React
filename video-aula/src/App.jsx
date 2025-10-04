import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { v4 } from 'uuid'

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Título da Tarefa",
      description: "Descrição da Tarefa",
      isCompleted: false
    },
    {
      id: 2,
      title: "Gerenciador de Tarefas",
      description: "Um gerenciador de tarefas com React e ao mesmo tempo aprendendo React JS",
      isCompleted: true
    }
  ]);
  
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // Preciso atualizar está tarefa
        if (task.id === taskId) {
            return {...task, isCompleted: !task.isCompleted} // retorna tudo da task e muda o isCompleted
        }

        // Não preciso atualizar está tarefa
        return task;
    });

    setTasks(newTasks);
  }

  function onTaskDeleted(taskId) {
    const deletedTask = tasks.filter(task => task.id != taskId); // Isso aqui tira a tarefa do States
    setTasks(deletedTask);
  }

  function createTaskSubmit(title, description) {
    const newTaskCreated = { 
      id: v4(),
      title,
      description,
      isCompleted: false 
    }
    setTasks([...tasks, newTaskCreated]); // tudo que estava na lista + a nova adicionada
  }

    return (
        <div className="w-screen h-screen bg-slate-500 justify-center p-6">
          <div className="w-[500px] m-auto space-y-4">
            <h1 className="text-3xl text-slate-100 font-bold text-center">
              Gerenciador de Tarefas
            </h1>
            <AddTasks createTaskSubmit={createTaskSubmit} />
            <Tasks tasks={tasks} onTaskClick={onTaskClick} onTaskDeleted={onTaskDeleted} />
          </div>
        </div>
    );
}



/*
// State (Estado) é uma variável, quando você altera o states você atualiza o componente | se você quiser alterar a interface você usa o States
import { useState } from "react";

export default function App() {
  const [msg, setMsg] = useState('Não chorax'); // = valor inicial
  return (
    <>
      <div>
        <h1>{msg}</h1>
        <button 
          onClick={() => {setMsg('Tremiliquix')}}
        >
          Mudar mensagem
        </button>
      </div>
    </>
  );
}
*/