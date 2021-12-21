const stringTeste = "Hello World!!!";
const regex = /Hello/;
console.log(regex.test(stringTeste));

console.log(regexH.test(stringTeste));
console.log(regexl.test(stringTeste));
console.log(regexll.test(stringTeste));

const regexW = /w/i;
console.log(regex.teste(stringTeste));

// o JS é case sensitive, ele diferencia as letras maiusculas das minusculas. Para que o JS reconheça o "w" minusculo, é necessário colocar esse "i" após a barra, para que ele ignore o w minusculo. 

const stringTeste1 = "Exemplo: Hello World!!!";
const regexComeco = /^Hello/;
const regexFinal = /!!!$/;

console.log(regexComeco.teste(stringTeste));
console.log(regexComeco.teste(stringTeste1));