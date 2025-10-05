export function Inputs(props) {
    const inputCL = 'border border-slate-300 outline-slate-400 px-4 py-2 rounded-md';
    
    return (
        <input
            {...props}
            className={inputCL}
        />
    );
}