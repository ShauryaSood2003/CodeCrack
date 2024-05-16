
interface itemInterface {
    id:number,
    title: string,
    content:string,
    tag:string
}
function Problem({item}:{item:itemInterface}){
    return(
        <div  className={`flex max-w-screen justify-between rounded-md p-3 text-xl ${item.id % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
            <div className="flex space-x-3">
                <p>{item.id}.</p>
                <p>{item.title}</p>
            </div>
            <p className={`${item.tag=="Easy"?"text-green-800":(item.tag=="Hard")?"text-red-800":"text-yellow-700"}`}>{item.tag}</p>
        </div>
    )
}
export default Problem;