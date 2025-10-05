export default function IconsBtn(props) {
    const iconsLucideCL = 'bg-slate-400 duration-300 p-2 rounded-md text-white hover:cursor-pointer hover:bg-slate-500';

    return (
        <button
            className={iconsLucideCL}
            {...props}
        >
            {props.children}
        </button>
    );
}