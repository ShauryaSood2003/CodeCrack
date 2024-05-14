
function CodeOptions({mode,setMode}:{mode:string,setMode:(value:string)=>void}){

    const handleModeChange = (event:any) => {
        setMode(event.target.value);
    };

    return(
        <div className='px-2 pt-5 pb-2'>
                <select className='bg-white text-slate-600 font-semibold' onChange={handleModeChange} value={mode}>
                    <option value="javascript">JavaScript</option>
                    <option value="text/x-c++src">C++</option>
                    <option value="text/x-java">Java</option>
                </select>   
        </div>
    )
}
export default CodeOptions;