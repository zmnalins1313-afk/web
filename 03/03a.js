import {createServer} from "http";

function serverCallback(){
    console.log("----------------------------");
}

let server = createServer(serverCallback);

server.listen(555);