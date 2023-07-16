/*
Operadores type of e delete
typeof  ---> vai informar o tipo de operação -- numero, string, objeto....
delete  ---> e utilizado para apagar informações...
*/

const myObject = {
    name: "Alex Dyna",
    age: 40,
    address: "Rua Nelson Barbosa",
    number: 2
}

console.log(typeof myObject) // objeto

delete myObject.address
console.log(myObject)