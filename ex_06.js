function ehPalíndromo(palavra) {
    let arr = palavra.toLowerCase().split("");
    let tamanho = arr.length;
    for (let i = 0; i < tamanho; i++) {
        if (arr[i] !== arr[tamanho - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(ehPalíndromo("ana"));