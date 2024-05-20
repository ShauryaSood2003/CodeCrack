import { createClient } from "redis";
const client=createClient();

const pubsubClinet=createClient({
    url: 'redis://localhost:6381'
});
  


async function completeTask(task:string) {
    const {code,test,user_id}=JSON.parse(task);
    console.log("Code solved : "+code);
    console.log("Test Case: "+test);
    console.log("User ID: "+user_id);
    // run the code
    // update status to db
    await new Promise(r=>{setTimeout(r,1000)});
    return JSON.stringify({
        status:"Done",
        user_id
    });
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