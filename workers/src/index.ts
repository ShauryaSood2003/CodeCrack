import { createClient } from "redis";
const client=createClient();



async function completeTask(task:string) {
    const {code,test}=JSON.parse(task);
    console.log("Code solved : "+code);
    console.log("Test Case: "+test);
    // run the code
    // update status to db
    await new Promise(r=>{setTimeout(r,1000)});
}

async function startWorker(){
    try{
        await client.connect();
        console.log("Redis-Worker Connected Successfully");
        while(true){
            try{
                const task:any=await client.brPop("problems",0);
                await completeTask(task.element);
            } catch (error) {
                console.error("Error processing submission:", error);
            }
        }
    }catch(error){
        console.error("Failed to connect to Redis", error);
    }
}
startWorker();