const theBiggestInt = 9007199254740991n
console.log(theBiggestInt)

const alsoHuge = BigInt(9007199254740991)
// ↪ 9007199254740991n
console.log(alsoHuge)

console.log(typeof alsoHuge) // bigint