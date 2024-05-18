import Content from "../components/addproblem/Content";
import Tag from "../components/addproblem/Tag";
import Title from "../components/addproblem/Title";

import axios from "axios";
import { useState } from "react";

function AddProblem(){
    const [content,setContent]=useState("");
    const [title,setTitle]=useState("");
    const [tag,setTag]=useState("");
    
    async function addProblem(){
        const data={
            title,
            content,
            tag
        }
        const message=await axios({
            method:"POST",
            url:"http://localhost:4000/admin/addProblems",
            data,
            withCredentials: true
        })
        console.log(message.data.message);
        setTitle("");
        setContent("");
        setTag("");
    }
    
    return(
        <div className="m-10 space-y-6">
            <h1 className="text-4xl font-bold mb-9 underline">
                Add New Problem
            </h1>
            <Title title={title} setTitle={setTitle}></Title>
            <Content content={content} setContent={setContent}></Content>
            <Tag  tag={tag} setTag={setTag}></Tag>
            <button  
                className="p-3 text-xl bg-green-800 text-white font-semibold rounded-md m-2 active:bg-green-600"
                onClick={()=>{addProblem()}}
            >Submit</button>
        </div>
    )
}
export default AddProblem;