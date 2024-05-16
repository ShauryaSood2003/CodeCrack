

function Tag({setTag,tag}:{setTag:(value:string)=>void,tag:string}){


    return(
        <div className="font-semibold flex flex-col space-y-3 m-2">
            <label className="text-2xl ">Add Tag</label>
            <input value={tag} onChange={(e)=>setTag(e.target.value)}  className="py-2 px-4 rounded-md bg-black text-white w-[80%]" placeholder="Easy"></input>
        </div>
    )
}
export default Tag;