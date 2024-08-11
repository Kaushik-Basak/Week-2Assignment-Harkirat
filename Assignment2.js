async function fetchData(url){
    try{
        const response = await fetch(url);
        const data = await response.json(url);
        console.log(data);
    }
    catch(error){
        console.log("Error");
    }
}

fetchData('https://jsonplaceholder.typicode.com/posts/1');