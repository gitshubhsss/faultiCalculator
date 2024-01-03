let random = Math.random();
console.log(random);
let a = prompt("Enter the first number");
let b = prompt("Enter the operation");
let c = prompt("Enter the second number");

let faltOpeations = {
    "+": "-",
    "*": "/",
    "-": "*",
    "/": "+"
}
if (random > 0.1) {
    //perform the correct calculations
    let result = eval(a, b, c);
    alert(`the result is ${result}`);
}
else {
    //perform the wrong operations
    b = faltOpeations[b];
    alert(`the result is ${result}`);

}