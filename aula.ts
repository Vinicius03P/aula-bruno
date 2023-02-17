const entrada = require("readline-sync");

let numero:number;
let numero2:number;

numero = parseFloat(entrada.question("digite umm numero:"));
numero2 =parseFloat(entrada.question("digite outro numero:"));
let soma = numero + numero2;
let menos = numero - numero2;
console.log("a media desses dois numeros é: " + soma, menos);