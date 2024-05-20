import { createClient } from "redis";
import express from "express";
import cors from "cors";

import { WebSocketServer } from 'ws';

const PORT=8080;
const app=express();
app.use(cors());

const connections=new Map();

const http=app.listen(PORT);

const wss=new WebSocketServer({server:http});

const client=createClient({
    url: "redis://localhost:6381"
})

async function start(){
    try{
        await client.connect();
        console.log("Connected Websocket Server with pubsub!");
        
        client.subscribe("notifyList", (message) => {
            const req=JSON.parse(message);
            const id=Number(req.user_id);
            const ws=connections.get(id);
            if(!ws){
                console.log("No such user found!");
            }else{
                console.log(req.status);
                
                ws.send(JSON.stringify(req.status));
            }
        });
    }catch(e){
        console.error("Failed to connet to pubsub redis!");
    }
}
start();

wss.on('connection', function connection(ws,req:any) {
    ws.on('error', console.error);

    const userId = req.url.split('?')[1].split('=')[1];
    console.log(userId);

    if(!userId) return;

    connections.set(Number(userId), ws);
  
    ws.on('message', function message(data) {
      console.log('received: %s', data);
    });
  
    ws.send('Connected to Websocket Bro!');
});