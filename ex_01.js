function ehPrimo(numero) {
    if (numero <= 1) {
        console.log("false")
        return;
    } for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            console.log("false")
            return
        }
    } console.log("true")
}

ehPrimo(853)