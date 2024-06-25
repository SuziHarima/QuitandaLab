let numerosArray = [2, 5, 8, 14, 9];

let somaArray = numerosArray.reduce((total, num) => total + num, 0)

console.log(somaArray)



let paresArray = numerosArray.filter( n => {
    return n % 2 == 0
})

console.log(paresArray)