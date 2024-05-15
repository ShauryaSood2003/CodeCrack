
import Editor from "./Editor"; 
import Solutions from "./Solutions"; 
import Description from "./Description";
import Submitions from "./Submitions";

import { useState } from "react";

function SwitchButton(){
    const [option,setOption]=useState("description");
    return(
        <div className="rounded-md bg-white pb-5 p-3">
            <div className="flex space-x-4">

                <div className={`flex space-x-1 ${option!="description"?" text-slate-400":"font-semibold "}`}>
                    <DescriptionIcon/>
                    <button  onClick={()=>{setOption("description")}}>Description</button>
                </div>
                <div className={`flex space-x-1   ${option!="editor"?" text-slate-400":"font-semibold "}`}>
                    <EditorIcon/>
                    <button onClick={()=>{setOption("editor")}}>Editor</button>
                </div>
                <div className={`flex space-x-1 ${option!="solutions"?" text-slate-400":"font-semibold "}`}>
                    <SoltuonsIcon/>
                    <button onClick={()=>{setOption("solutions")}}>Solutions</button>
                </div>
                <div className={`flex space-x-1 ${option!="submition"?" text-slate-400":"font-semibold "}`}>
                    <SubmitionIcon/>
                    <button onClick={()=>{setOption("submition")}}>Submition</button>
                </div>
                
            </div>
            {(() => {
                switch (option) {
                    case "description":
                        return <Description />;
                    case "editor":
                        return <Editor />;
                    case "solutions":
                        return <Solutions />;
                    case "submition":
                        return <Submitions />;
                    default:
                        return <h1>Not Allowed@</h1>
                }
            })()}
        </div>
    )
}
function DescriptionIcon(){
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-blue-900">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
  
}
function EditorIcon(){
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-700">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
  </svg>
  
}

function SoltuonsIcon(){
    return<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-900">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
  </svg>
  
}
function SubmitionIcon(){
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green-900">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z" />
  </svg>
  
}
export default SwitchButton;