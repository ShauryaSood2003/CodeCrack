function Button({text,onClick}:{text:string,onClick:()=>void}){
    return(
        <button onClick={onClick} className=" bg-black rounded-md text-white px-8 py-2 text-lg font-semibold ">{text}</button>
    )
}
export default Button;