function Title({id,title,tag}:{id:number,title:string,tag:string}){
    return(
        <div className=" space-y-4 mb-5">
            <h1 className="text-2xl font-bold my-3">{id}. {title}</h1>
            <p className={` m-2 ${tag=="Easy"?"text-green-800":(tag=="Hard")?"text-red-800":"text-yellow-700"}`}>{tag}</p>
        </div>
    )
}
export default Title;