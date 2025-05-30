function ehPalimetro(palavra) {
    let arr = palavra.toString().split("");
    let palimetro = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] === arr.length - i) {
            palimetro = true;
        } else {
            palimetro = false;
        }
    }
    console.log(palimetro)
}

ehPalimetro("ana")