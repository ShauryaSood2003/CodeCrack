function Content({text}:{text:string}){
    
    return(
        <div>
            <p className=" text-slate-700" dangerouslySetInnerHTML={{__html: text}}></p>
        </div>
    );
}
export default Content;