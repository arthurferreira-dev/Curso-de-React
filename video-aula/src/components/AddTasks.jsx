import { useState } from "react";

export default function AddTasks( { createTaskSubmit } ) {
    const inputsCL = 'border border-slate-300 outline-slate-400 px-4 py-2 rounded-md';
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col flex-wrap">
            <input 
                type="text" 
                placeholder="Digite o título da tarefa..."
                className={inputsCL}
                value={title} // Tem o valor do título
                onChange={(event) => {setTitle(event.target.value)}}
            />

            <input 
                type="text" 
                placeholder="Digite a descrição da tarefa..."
                className={inputsCL}
                value={desc} // Tem o valor da descrição
                onChange={(event) => {setDesc(event.target.value)}}
            />

            <button 
                className="bg-slate-500 duration-300 text-white px-4 py-2 rounded-md font-medium hover:cursor-pointer hover:bg-slate-600"
                onClick={() => {
                    if (!title.trim() || !desc.trim()) {
                        return alert("Porfavor preencha o título e a descrição!")
                    } else {
                        createTaskSubmit(title, desc);
                    }
                    
                    setTitle("")
                    setDesc("")
                }}
            >
                Adicionar
            </button>
        </div>
    );
}