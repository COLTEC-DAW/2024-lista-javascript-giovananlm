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
