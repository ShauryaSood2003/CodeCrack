import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface itemInterface {
    id:number,
    title: string,
    content:string,
    tag:string
}

const difficultyColors:any = {
    Easy: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Hard: "bg-red-100 text-red-800",
}


function Problem({item}:{item:itemInterface}){
    const navigate=useNavigate();

    function handleClick(){
        navigate(`/code/${item.id}`)
    }

    return(
       
        <Card onClick={()=>{handleClick()}} >
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl">{item.title}</CardTitle>
            <Badge className={difficultyColors[item.tag]}>{item.tag}</Badge>
          </div>
          <CardDescription>{item.tag}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 line-clamp-2">{item.content}</p>
        </CardContent>
      </Card>
    )
}
export default Problem;