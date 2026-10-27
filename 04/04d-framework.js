import { createServer } from 'http';

export default function framework(){
    let controllers = [];
    let app = {
        get: function(path, func){
            controllers.push({
                name: path,
                func: func
            })
        },
        listen: function(port, callback){
            function serverCallback(request, response){
            console.log("------------------------");
            console.log("url", request.url);

            let found = false;
            for(const controller of controllers){
                if(request.url.startsWith('/' + controller.name)){
                    found = true;
                    controller.func(request, response);
                    break;
                }
            }
            if(!found){
                console.log("path not found.");
            }
        }

        let server = createServer(serverCallback);

        server.listen(port, callback);
        }
    }

    return app;

}