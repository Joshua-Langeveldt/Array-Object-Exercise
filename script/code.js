/*
function result() {

    let numb1 = document.querySelector ('[numb1]').value
    let operator = document.querySelector('[operator]').value
    let numb2 = document.querySelector('[numb2]').value
    //OutPut
    let output =document.querySelector('[output]')
    output.textContent = eval(`${numb1} ${operator} ${numb2}`)
    
}*/

const friends = [];

function add(){

    let firstName = document.querySelector('[firstName]').value
    let lastName = document.querySelector('[lastName]').value
    let emailAdd = document.querySelector('[emailAdd]').value


    //Add Reference

    friends.push({firstName, lastName, emailAdd})
    console.table(friends)

}


