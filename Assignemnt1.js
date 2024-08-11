const promise = new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve();
    },1000);
})

// The then() method is used to handle what happens after the Promise
//  is resolved. In this case, after the delay (1 seconds), the Promise
//  is resolved, and the code inside then() runs.
promise.then(() => {
    console.log("Great");
})