const fs = require("fs");
const util = require("util");


// The util.promisify function takes a function that uses a callback
//  (like fs.readFile) and returns a new version of that function which
//   returns a Promise instead of requiring a callback.

const readFile = util.promisify(fs.readFile);

async function readFileContent(path){
    try{
        const data = await readFile(path,"utf-8");
        console.log(data);
    }
    catch(error){
        console.log("Error");
    }
}

readFileContent("a.txt");

