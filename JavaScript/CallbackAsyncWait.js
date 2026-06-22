/************************************************
    CALLBACKS, PROMISES & ASYNC/AWAIT
    COMPLETE REFERENCE NOTE
************************************************/


// ======================================
// 1. CALLBACK
// ======================================

// A callback is simply a function passed
// as an argument to another function.

function greet(name, callback){

    console.log("Hello", name);

    callback(); // execute later
}

function sayBye(){

    console.log("Goodbye");
}

greet("Tejas", sayBye);

/*
Output:

Hello Tejas
Goodbye

Flow:

greet()
   ↓
callback()
   ↓
sayBye()
*/



// ======================================
// 2. ASYNCHRONOUS OPERATION
// ======================================

// setTimeout simulates data coming from a server

setTimeout(() => {

    console.log("Data Arrived");

}, 2000);

/*
JavaScript DOES NOT wait.

Start
↓
setTimeout()
↓
continues execution
↓
2 sec later
↓
Data Arrived
*/



// ======================================
// 3. CALLBACK HELL
// ======================================

function getUser(callback){

    console.log("Getting User...");

    callback();

}

function getPosts(callback){

    console.log("Getting Posts...");

    callback();

}

function getComments(callback){

    console.log("Getting Comments...");

    callback();

}


// BAD: deeply nested

getUser(() => {

    getPosts(() => {

        getComments(() => {

            console.log("Finished");

        });

    });

});

/*

This shape:

getUser(
    getPosts(
        getComments(
        )
    )
)

is called CALLBACK HELL

Problems:
- difficult to read
- difficult to debug
- difficult to maintain

*/



// ======================================
// 4. PROMISE
// ======================================

// Promise = object representing future result

const promise = new Promise((resolve, reject) => {

    let success = true;

    if(success){

        resolve("Data Found");

    }
    else{

        reject("Error");

    }

});


/*

Promise States

Pending
   |
   +----> Fulfilled (resolve)
   |
   +----> Rejected (reject)

*/



// ======================================
// 5. .then()
// ======================================

promise.then((result) => {

    console.log(result);

});

/*

Runs ONLY when promise resolves

resolve("Data Found")

↓

.then()

↓

Data Found

*/



// ======================================
// 6. .catch()
// ======================================

promise.catch((error) => {

    console.log(error);

});

/*

Runs ONLY when promise rejects

reject("Error")

↓

.catch()

↓

Error

*/



// ======================================
// 7. RETURNING A PROMISE
// ======================================

function fetchData(){

    return new Promise((resolve) => {

        resolve("Server Response");

    });

}

/*

Functions often return promises.

fetchData()

↓

Promise

*/



// ======================================
// 8. PROMISE CHAINING
// ======================================

fetchData()

.then((data) => {

    console.log(data);

    return fetchData();

})

.then((data) => {

    console.log(data);

    return fetchData();

})

.then((data) => {

    console.log(data);

});

/*

Instead of:

callback
    callback
        callback

we do:

.then()
.then()
.then()

Cleaner

*/



// ======================================
// 9. ASYNC FUNCTION
// ======================================

async function hello(){

    return "Hello";

}

/*

async automatically returns a Promise

Actually returns:

Promise { "Hello" }

*/



// ======================================
// 10. AWAIT
// ======================================

function getData(){

    return new Promise((resolve) => {

        resolve("Data Loaded");

    });

}

async function main(){

    let result = await getData();

    console.log(result);

}

/*

await means:

"Wait until promise resolves"

Without await:

getData();
console.log("Done");

Output:

Done
Data Loaded


With await:

await getData();
console.log("Done");

Output:

Data Loaded
Done

*/



// ======================================
// 11. TRY / CATCH WITH ASYNC AWAIT
// ======================================

async function getInfo(){

    try{

        let data = await getData();

        console.log(data);

    }

    catch(error){

        console.log(error);

    }

}

/*

Used to handle promise errors

Equivalent to:

.then()
.catch()

*/



// ======================================
// 12. COMPLETE MODERN APPROACH
// ======================================

function getDataById(id){

    return new Promise((resolve) => {

        console.log("Fetching Data", id);

        resolve();

    });

}

async function fetchEverything(){

    await getDataById(1);

    await getDataById(2);

    await getDataById(3);

    console.log("All Data Loaded");

}

fetchEverything();

/*

Flow:

await getDataById(1)
↓
await getDataById(2)
↓
await getDataById(3)
↓
Finished

This is the preferred modern approach.

*/