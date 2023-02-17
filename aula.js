var entrada = require("readline-sync");
var numero;
var numero2;
numero = parseFloat(entrada.question("digite umm numero:"));
numero2 = parseFloat(entrada.question("digite outro numero:"));
var soma = numero + numero2;
var menos = numero - numero2;
console.log("a media desses dois numeros é: " + soma + menos);
