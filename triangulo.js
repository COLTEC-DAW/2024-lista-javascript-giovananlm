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
Xadrez();

function Palindromo(){}