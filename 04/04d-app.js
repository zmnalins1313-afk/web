import framework from "./04d-framework.js";

let app = framework();
let port = 3000;
app.get("sum", function (request, response){
            let items = request.url.split("/");
            response.writeHead(200);
            response.write((Number(items[2]) + Number(items[3])).toString());
            response.end();
});

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})