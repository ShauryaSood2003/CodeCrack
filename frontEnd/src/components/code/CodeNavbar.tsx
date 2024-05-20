import axios from "axios";
import { useNavigate } from "react-router-dom";
import useWebHook from "../../hooks/WebHook";
import { useEffect, useState } from "react";

function CodeNavbar({value,input}:{value:string,input:string}){
    const navigate=useNavigate();
    const [isSubmit,setSubmit]=useState(false);
    
    
    const ws=useWebHook(`ws://localhost:8080?userId=1`);

    useEffect(()=>{
        if(ws){
            function handleMessageEvent(event:any){
                const receivedMessage = event.data;
                console.log("Received:", receivedMessage);
            }

            ws.addEventListener("message",handleMessageEvent);

            return ()=>{
                ws.removeEventListener("message",handleMessageEvent);
            }

        }
    },[ws,isSubmit]);

    async function handleSubmit(){
        try{
            
            await axios({
                method:"POST",
                url:"http://localhost:4000/submit",
                data:{
                    code:value,
                    test:input
                },
                withCredentials:true
            })
            setSubmit(prev=>!prev);
            console.log("Message send Successfully!");

        }catch(e:any){
            if(e.message==="Network Error"){
                console.log("Failed to Send Message! Server Down");
            }else{
                setTimeout(()=>{
                    navigate("/signin")
                },2000);
            }
        }
    }
    function handleRun(){
        console.log(value);
        console.log(input);
    }
    return(
        <div className='flex space-x-8 my-3'>
            <div className='text-slate-600 flex space-x-1 font-semibold'>
                <ArrowRunIcon/>
                <button onClick={handleRun}>Run</button>
            </div>
            <div className='text-green-600 flex space-x-1 font-semibold'>
                <CloudSubmitIcon/>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}
function CloudSubmitIcon(){
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
  </svg>
  
}
function ArrowRunIcon(){
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
  </svg>
}
export default CodeNavbar;