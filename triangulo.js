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
function toList(array){
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}//testando...
let x = toList([4, 5, 6, 6, 7]);
console.log(x);

//Deep Equals
function deepEquals(obj1, obj2) {
    const chavesObj1 = Object.keys(obj1).sort();
    const chavesObj2 = Object.keys(obj2).sort();
  
    if (chavesObj1.length !== chavesObj2.length) {
        return false;
    }
  
    for (let i = 0; i < chavesObj1.length; i++) {
        if (chavesObj1[i] !== chavesObj2[i]) {
            return false;
        }
    }
    return true;
}
  
const obj1 = {
    "nome": "enaldinho",
    "profissao": "youtuber",
    "instagram": "enaldinho"
};
  
const obj2 = {
    "pais": "Etiópia",
    "continente": "África",
    "capital": "Addis Ababa"
};
  
const obj3 = {
    "pais": "Eslovênia",
    "continente": "Europa",
    "capital": "Liubliana"
};
//testando...
console.log(deepEquals(obj1, obj2));
console.log(deepEquals(obj2, obj3));

//Funções de Primeira Ordem
//Ordenação
function bubbleSort(array, criterioOrdem) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (criterioOrdem(array[i], array[i + 1])) {
                // Trocam os numeros
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

// Ordenação crescente
function criterioCrescente(a, b) {
    return a > b;
}

// Ordenação decrescente
function criterioDecrescente(a, b) {
    return a < b;
}

// Ordenação crescente para números ímpares n sei fazer

// Ordenação decrescente para números pares
function criterioDecrescentePares(a, b) {
    return a % 2 === 0 && b % 2 === 0 && a < b;
}
//Testando...
const vetor = [9, 11, 10, 3, 5, 2, 1, 6];

// Ordenação crescente
bubbleSort(vetor, criterioCrescente);
console.log("Ordenação Crescente:", vetor);

// Ordenação decrescente
bubbleSort(vetor, criterioDecrescente);
console.log("Ordenação Decrescente:", vetor);

// Ordenação decrescente para pares
bubbleSort(vetor, criterioDecrescentePares);
console.log("Ordenação Decrescente para Pares:", vetor);

//Criptografia
function Criptografar(string, criterio, num){
    let temp = "";
    string = string.toLowerCase();
    for(let i = 0; i < string.length; i++){
        temp += criterio(string[i], num);
    }
    return temp;
}

function criterioCesar(char, num){
    let alfabeto = "abcdefghijklmnopqrstuvwxyz";
    for(let j = 0; j < alfabeto.length; j++){
        if(char == alfabeto[j]){
            return alfabeto[(j + num) % 26];
        }
    }
}//testando...
console.log(Criptografar("Nassif", criterioCesar, 1));

//Verificando um número
function checagem(num, criterio){
    return criterio(num);
}
function impar(num){
    if(num % 2 != 0){
        return true;
    } else{
        return false;
    }
}
function primo(num){
    for(let i = 2; i <= num/2; i++){
        if(num % i == 0){
            return false;
        } 
    }
    return true;
}//testando...
console.log(checagem(5, primo), checagem(25, primo));

//Transformações em uma String
function transforma (string, criterio){
    return criterio(string);
}
function vogaisGrandes(string){
    let vogais = "aeiou";
    let temp = "";
    let boleano = false;
    for(let i = 0; i < string.length; i++){
        boleano = false;
        for(let j = 0; j < vogais.length; j++){
            if(string[i] == vogais[j]){
                temp += string[i].toUpperCase();
                boleano = true;
            }
        }
        if(boleano == false){
            temp += string[i];
        }
    }
    return temp;
}
function consoantesGrandes(string){
    let consoantes = "bcdfghjklmnpqrstwxyz";
    let temp = "";
    let boleano = false;
    for(let i = 0; i < string.length; i++){
        boleano = false;
        for(let j = 0; j < consoantes.length; j++){
            if(string[i] == consoantes[j]){
                temp += string[i].toUpperCase();
                boleano = true;
            }
        }
        if(boleano == false){
            temp += string[i];
        }
    }
    return temp;
}
function vogaisPequenas(string){
    let vogais = "AEIOU";
    let temp = "";
    let boleano = false;
    for(let i = 0; i < string.length; i++){
        boleano = false;
        for(let j = 0; j < vogais.length; j++){
            if(string[i] == vogais[j]){
                temp += string[i].toLowerCase();
                boleano = true;
            }
        }
        if(boleano == false){
            temp += string[i];
        }
    }
    return temp;
}
function consoantesPequenas(string){
    let consoantes = "BCDFGHJKLMNPQRSTVWXYZ";
    let temp = "";
    let boleano = false;
    for(let i = 0; i < string.length; i++){
        boleano = false;
        for(let j = 0; j < consoantes.length; j++){
            if(string[i] == consoantes[j]){
                temp += string[i].toLowerCase();
                boleano = true;
            }
        }
        if(boleano == false){
            temp += string[i];
        }
    }
    return temp;
}
console.log(transforma("Banana", vogaisGrandes), transforma("Banana", consoantesGrandes), transforma("BANANA", vogaisPequenas), transforma("BANANA", consoantesPequenas));