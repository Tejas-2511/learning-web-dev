/************************************************
        FETCH API COMPLETE REFERENCE
************************************************/


// ======================================
// 1. WHAT IS AN API?
// ======================================

/*

API = Application Programming Interface

Think:

Weather App
    ↓
Weather API
    ↓
Weather Data

Instagram
    ↓
Instagram API
    ↓
Posts

API sends data.

Usually data is sent as JSON.

*/


// ======================================
// 2. JSON
// ======================================

/*

JSON = JavaScript Object Notation

Server sends:

{
    "name":"Tejas",
    "age":19
}

Looks similar to JavaScript objects.

*/


// JavaScript Object

const user = {

    name: "Tejas",
    age: 19

};


// Convert Object → JSON

const jsonString = JSON.stringify(user);


/*

Result:

'{"name":"Tejas","age":19}'

*/


// Convert JSON → Object

const objectAgain = JSON.parse(jsonString);


/*

Result:

{
    name:"Tejas",
    age:19
}

*/


// ======================================
// 3. FETCH API
// ======================================

/*

fetch()

used to request data from a server

Returns a Promise

*/

const promiseReturnedByFetch = fetch("https://api.example.com");


/*

fetch()

↓

Promise

↓

Response

*/


// ======================================
// 4. USING .then()
// ======================================

fetch("https://api.example.com")

.then((response) => {

    console.log(response);

});


/*

response is NOT actual data

response contains:

status
headers
body

*/


// ======================================
// 5. RESPONSE OBJECT
// ======================================

fetch("https://api.example.com")

.then((response) => {

    console.log(response.status);

    console.log(response.ok);

});


/*

response.status

200 = Success

404 = Not Found

500 = Server Error

response.ok

true
false

*/


// ======================================
// 6. response.json()
// ======================================

fetch("https://api.example.com")

.then((response) => {

    return response.json();

})

.then((data) => {

    console.log(data);

});


/*

IMPORTANT

response.json()

also returns a Promise

Flow:

fetch()
    ↓
response
    ↓
response.json()
    ↓
actual data

*/


// ======================================
// 7. PROMISE CHAINING WITH FETCH
// ======================================

fetch("https://api.example.com")

.then((response) => {

    return response.json();

})

.then((data) => {

    console.log(data);

})

.catch((error) => {

    console.log(error);

});


/*

.catch()

handles network errors

*/


// ======================================
// 8. ASYNC AWAIT VERSION
// ======================================

async function getData(){

    let response = await fetch(
        "https://api.example.com"
    );

    let data = await response.json();

    console.log(data);

}


/*

await fetch()

↓

Response

↓

await response.json()

↓

Actual Data

*/


// ======================================
// 9. TRY CATCH
// ======================================

async function getData(){

    try{

        let response = await fetch(
            "https://api.example.com"
        );

        let data = await response.json();

        console.log(data);

    }

    catch(error){

        console.log(error);

    }

}


/*

Modern way of handling errors

*/


// ======================================
// 10. REAL PROJECT FLOW
// ======================================

async function getWeather(){

    try{

        let response = await fetch(
            "weather-api-url"
        );

        let weatherData =
            await response.json();

        console.log(weatherData);

    }

    catch(error){

        console.log(error);

    }

}


/*

Weather Button Click
        ↓

fetch()
        ↓

API Request Sent
        ↓

Server Responds
        ↓

response.json()
        ↓

JSON Data
        ↓

Display on Page

*/


// ======================================
// 11. DOM + FETCH
// ======================================

let btn =
    document.querySelector("#btn");

let para =
    document.querySelector("#result");

btn.addEventListener("click", async () => {

    let response =
        await fetch("api-url");

    let data =
        await response.json();

    para.innerText = data.name;

});


/*

Real Project:

Button Click
      ↓
API Call
      ↓
Get Data
      ↓
Update DOM

*/


// ======================================
// 12. COMPLETE MODERN TEMPLATE
// ======================================

async function fetchData(){

    try{

        let response =
            await fetch("API_URL");

        let data =
            await response.json();

        console.log(data);

    }

    catch(error){

        console.log(error);

    }

}

fetchData();


/*

This template is used in:

Weather Apps
Crypto Apps
Movie Apps
News Apps
Chat Apps
React Projects

Almost everywhere.

*/