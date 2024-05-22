import { createClient } from "redis";
import { executeCode } from "./util";
const client=createClient();

const pubsubClinet=createClient({
    url: 'redis://localhost:6381'
});
  


async function completeTask(task:string) {
    const {code,test,user_id,language}=JSON.parse(task);

    console.log("Code solved : "+code);
    console.log("Test Case: "+test);
    console.log("User ID: "+user_id);
    console.log("Language"+language);

    const output = await executeCode({
        code,
        language,
    });
    console.log(output);
    
    if (output.run.code == 0) {
        console.log("Done");
        return JSON.stringify({
            status:"Done",
            user_id
        });
    }else {
        console.log("Error");
        return JSON.stringify({
            status:"Error",
            user_id
        });
    }
    
    
    // run the code
    // update status to db
    
}

async function startWorker(){
    try{
        await client.connect();
        console.log("Redis-Worker Connected Successfully");
        connectPubSub();
        while(true){
            try{
                const task:any=await client.brPop("problems",0);
                const response=await completeTask(task.element);
                await pubsubClinet.publish("notifyList",response) ;
            } catch (error) {
                console.error("Error processing submission:", error);
            }
        }
    }catch(error){
        console.error("Failed to connect to Redis", error);
        await client.disconnect();
    }
}
startWorker();

async function connectPubSub(){
    try{
        await pubsubClinet.connect();
        console.log("Pub Sub Connected Successfully!");

    }catch(e){
        console.error(e);
        await pubsubClinet.disconnect();
    }
}