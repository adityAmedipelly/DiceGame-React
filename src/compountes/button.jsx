export const Button = ({label,onClick}) =>{
    return(
        <button onClick={onClick} className = "px-10 py-2 bg-black text-white rounded hover:bg-slate-400 transition ">
            {label}  
        </button>
    )
}