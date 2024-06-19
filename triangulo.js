/* Lista de JavaScript - Giovana Nassif Leonel Membrive 
JavaScript: Conceitos Básicos */
function Triangulo(){
    const quantidadeLinhas = parseInt(prompt("Informe a quantidade de linhas:"));

    // Loop para imprimir as linhas
    for (let i = 1; i <= quantidadeLinhas; i++) {
        let linha = "";
        // Loop para adicionar os "#" na linha
        for (let j = 1; j <= i; j++) {
            linha += "#";
        }
        console.log(linha); // Imprime a linha atual no console
    }
}

function Xadrez(){
    const quantidadeLinhas = parseInt(prompt("Informe a quantidade de linhas do tabuleiro:"));

    // Loop para imprimir as linhas
    for (let i = 1; i <= quantidadeLinhas; i++) {
        var p = document.createElement("p");
        var linha;
        if(i % 2 == 0){ //se for par imprime de um jeito
            linha = document.createTextNode("  #  #  #  #");
        }else{ //se for impar imprime outro tipo de linha
            linha = document.createTextNode("#  #  #  #  ");
        }
        p.appendChild(linha);
        document.body.appendChild(p);
    }
}
//Xadrez();

function Palindromo(){
    const palavra = prompt("Informe a palavra:");
    const palavraInvertida = palavra.split('').reverse().join('');
    if(palavra === palavraInvertida){
        console.log("Eh um palindromo!");
    } else{
        console.log("Nao eh palindromo");
    }
}
//Palindromo();

function Contando(){
    for(let i = 0; i<=100; i += 1){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        }
        else if(i % 3 == 0){
            console.log("Fizz");
        }
        else if(i % 5 == 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
//Contando();

//JavaScript: Funções
//Mínimo e Máximo
function min(x, y){
    let temp = 0;
    if(x > y){
        temp = y;
    } else {
        temp = x;
    }
    return temp;
}
function max(x, y){
    let temp = 0;
    if(x > y){
        temp = x;
    } else {
        temp = y;
    }
    return temp;
}
console.log(min(7, 1), max(7,1));

//Recursividade
function mod2(num){
    let modulo = num - 2;
    let ehDivisivel = false;
    if(modulo == 0){ 
        ehDivisivel = true; 
        console.log("é divisível");
        return ehDivisivel;
    } else if(modulo > 0){
        mod2(modulo);
    } else { 
        console.log("não é divisível");
        return ehDivisivel;}
}

function mod(num, modulo){
    let divisivel = num - modulo;
    let ehDivisivel = false;
    if(divisivel > 0){
        mod(divisivel, modulo);
    } else if (divisivel == 0){
        ehDivisivel = true;
        console.log("é divisível");
        return ehDivisivel;
    } else{
        console.log("não é divisível");
        return ehDivisivel;
    }
}//testando...
mod(9,3);
mod(7,4);
mod2(10);
mod2(11); //funfa!

//Contando caracteres
function countChars(frase, n){
    let contador = 0;
    for(i = 0; i < frase.length; i++){
        if(frase[i] == n){
            contador++;
        }
    }
    return contador;
}//testando...
console.log(countChars("Nassif", 's'));

//JavaScript: Objetos & Arrays
//Trabalhando com intervalos 
function range(min, max, i){
    let rng = [];
    for(let z = min; z < max; z += i){
        rng.push(z);
    }
    return rng;
}//testando...
let r = range(2, 9, 2);
console.log(r);

//Revertendo um array
function reverseArray(a){
    let temp = [];
    for(let i = 0; i < a.length; i++){
        temp[i] = a[a.length - 1 - i];
    }
    return temp;
}//testando...
console.log(reverseArray("Nassif"));

//Trabalhando com Listas

//Deep Equals