function ehPrimo(numero) {
    if (numero % 1 == 0 && numero % numero == 0) {
        return true 
    }else {
        return false
    }
}
console.log(ehPrimo(7))