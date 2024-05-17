

function Input({lable,type,placeholder,name,value,onChange}:{lable:string,type:string,placeholder:string,name:string,value:string,onChange:(e:any)=>void}){
   
    return(
        <div className=" space-y-3 w-full">
            <p className="text-xl font-bold">{lable}</p>
            <input 
                value={value} 
                name={name} 
                onChange={onChange} 
                className="px-5 py-2 rounded-md bg-slate-200 border-2 w-full" 
                type={type} 
                placeholder={placeholder}
            ></input>
        </div>
    )

}
export default Input;