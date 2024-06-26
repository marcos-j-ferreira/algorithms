// Escreva um código que imprima os números pares, o range desse número será escolhido pelo usuário. 

let number = +prompt("enter a number: ")
let counter = 0

for(let i = 1; i <= number; i++){
    if(i % 2 == 0){
        counter++
        console.log(i)
    }
}
console.log(`has ${counter} even numbers`)