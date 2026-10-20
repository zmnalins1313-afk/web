import {createServer} from "http";

function serverCallback(request, response){
    console.log("----------------------------");
    let inputs = request.url.split("/");
    response.writeHead(200);
    let sum = Number(inputs[1]) + Number(inputs[2]);
    response.write(`${sum}`);
    response.end();
}

let server = createServer(serverCallback);

server.listen(555);