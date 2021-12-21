// Match (recupera o resultado da correspondência de uma string com uma expressão regular)

/* let produtos = "3210231-B\n322032321-B\n3231212121-C\n9885-D\n655606565-E\n9879908983214132-F";
console.log(produtos);
const regex = /[0-9]+[-][B]/g;
const resultado = produtos.match(regex);
console.log(resultado); */




// Exec (Recupera o resultado da correspondência de uma string com uma expressão regular)

let produtos = "3210231-B\n322032321-B\n3231212121-C\n9885-D\n655606565-E\n9879908983214132-F";
console.log(produtos);
const regex = /[0-9]+[-][B]/;
const resultado = regex.exec(produtos);
console.log(resultado);

