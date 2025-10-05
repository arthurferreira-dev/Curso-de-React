import { useState, useEffect } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { v4 } from 'uuid'
import Title from "./components/title";

export default function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  ); /* a primeira ele pega o item tasks do localstorage e a segunda ele retorna uma array vazia */

  // useEffect = cria um efeito que acontece quando algo é modificado
  useEffect(() => { // ele executa a function sempre que alguma valor que estiver na array dele for alterado
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  /*
  useEffect(() => {
      const ApiCall = async () => {
        // Chamar a API
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos?_limit=3',
          { method: "GET" }
        );

        // Pegar os dados
        const data = await response.json();
  
        // Salvar os dados
        setTasks(data);
      }
      //ApiCall(); // Chamando a function API
  }, []); // quando você cria o useEffect com a lista vazia ele executa apenas uma vez
  */
  
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
            
            <Title>
              Gerenciador de Tarefas
            </Title>
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