/********* PRIMER EJERCICIO **********/ 
//import { brotliDecompressSync } from "zlib";
/* 
const registerButton = document.getElementById('register');
registerButton.addEventListener('click',printValues);

function printValues(event){
    event.preventDefault();
    const data = {
        name: document.getElementById('name').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    }
    console.log(data)
}*/

/********* SEGUNDO EJERCICIO **********/ 
/*const registerButton = document.getElementById('register');
registerButton.addEventListener('click',printValues);
window.addEventListener('load', getUsers);

function getUsers(){
    const headers = new Headers({'Content-Type': 'application/json'});
    return fetch('http://localhost:3000/users', {
        method: 'GET',
        headers: headers
    }).then(response => {
        return response.json()
    }).then(res => console.log(res))
}

function printValues(event){
    event.preventDefault();
    const data = {
        name: document.getElementById('name').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    }
    console.log(data);
}*/


/********* TERCER EJERCICIO **********/ 
const registerButton = document.getElementById('register');
registerButton.addEventListener('click',postUsers);

function postUsers(event){
    event.preventDefault();
    const data = {
        name: document.getElementById('name').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    }
    console.log(data)
    const headers = new Headers({'Content-Type': 'application/json'});
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    }).then(response => {
        return response.json()
    }).then(res => console.log(res))
}



