function somaImpares(arr) {
    let quantImpares = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            quantImpares+= 1
        }
    }
    console.log(quantImpares)
}

somaImpares([3, 12, 17, 8, 25, 6, 11, -21, 1, 28])