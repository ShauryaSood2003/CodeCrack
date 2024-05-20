import { useEffect, useRef } from "react";

function useWebHook(url:string){
    const ws=useRef<WebSocket|null>(null);
    
    useEffect(()=>{
        ws.current=new WebSocket(url);
        ws.current.onerror=console.error;
        ws.current.onopen=function open(){
            console.log("Connected Established!");
        }
        ws.current.onmessage=function message(event:any) {
            console.log('received: ', event.data);
        };
        return ()=>{
            if (ws.current) {
                ws.current.close();
                console.log("Connection closed");
            }
        }
    },[url]);

    return ws.current;
}
export default useWebHook;