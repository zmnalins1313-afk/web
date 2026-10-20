import {createServer} from "http";

let controllers = [
    {
        name: "sum",
        func :  function (request, response){
            let inputs = request.url.split("/");
            response.writeHead(200);
            let number = Number(inputs[2]) + Number(inputs[3]);
            response.write(`${number}`);
            response.end();
        }
    },
    {
        name: "minus",
        func : function (request, response){
            let inputs = request.url.split("/");
            response.writeHead(200);
            let number = Number(inputs[2]) - Number(inputs[3]);
            response.write(`${number}`);
            response.end();
        }
    },
]

function serverCallback(request, response){
   
    let found = false;


    for(let i=0; i < controllers.length; i++){
        if(request.url.startsWith(`/` + controllers[i].name)){
            controllers[i].func(request, response);
            found = true;
            break;
        }
    }
    if(!found){
        console.log("command not found.");
        response.writeHead(404);
        response.write("command not found.");
        response.end();
    }
}

let server = createServer(serverCallback);

server.listen(555);