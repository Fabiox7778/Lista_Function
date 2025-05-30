function inverterArray(arr) {
    let inverso = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        inverso.push(arr[i]);
    }
    console.log(inverso);
}


inverterArray([1, 2, 3, 4, 5, 6]); 