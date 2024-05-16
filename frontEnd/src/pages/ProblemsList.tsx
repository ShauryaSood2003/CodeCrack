import { useEffect, useState } from "react";
import axios from "axios";
import Problem from "../components/problemlist/Problem";

interface itemInterface {
    id:number,
    title: string,
    content:string,
    tag:string
}


function ProblemsList(){
    const [list,setList]=useState([]);
    useEffect(()=>{
        async function getList(){
            try{
                const response=await axios({
                    method:"POST",
                    url:"http://localhost:4000/problemlist",
                })
                setList(response.data);
            }catch(e){
                console.log("Failed To get Data!");
                
            }
        }
        getList();
    },[]);

    if(list.length==0){
        return<div>
            Loading...
        </div>
    }

    return(
        <div className="m-5">
            <h1 className="text-2xl font-bold underline mb-4">
                Problems List
            </h1>
            <div className="rounded-md p-3">
                {
                    list.map((item:itemInterface)=>{
                        return (
                            <Problem key={item.id} item={item}></Problem>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ProblemsList;