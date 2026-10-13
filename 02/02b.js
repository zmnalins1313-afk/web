let command = process.argv[2];
let input = process.argv.slice(3);



let controllers = [
    {
        name: "sum",
        func: function (input){
            console.log("sum is:", Number(input[0]) + Number(input[1]));
        }
    },
    {
        name: "minus",
        func: function (input){
            console.log("minus is:", Number(input[0]) - Number(input[1]));
        }
    },
    {
        name: "print",
        func: function (input){
            let info = {
                "name": input[0],
                "email": input[1],
                "age": Number(input[2])
            }
            console.log("info is:", info);
        }
    },
]

let found = false;

for(let i=0; i < controllers.length; i++){
    if(controllers[i].name === command){
        controllers[i].func(input);
        found = true;
        break;
    }
}
if(!found){
    console.log("command not found.");
}