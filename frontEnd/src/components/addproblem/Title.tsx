
function Title({setTitle,title}:{setTitle:(item:string)=>void,title:string}){
    
    return(
        <div className="font-semibold flex flex-col space-y-3 m-2">
            <label className="text-2xl ">Title</label>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} className="py-2 px-4 rounded-md bg-black text-white w-[80%]" placeholder="Title"></input>
        </div>
    );
}
export default Title;