export {};

// symbol are not created by new keyword

// const symbol1 = Symbol()

// symbol have description
// Symbol('username')

// symbol are unique

const symbol1 = Symbol("user");
const symbol2 = Symbol("user");
console.log(typeof symbol1 === typeof symbol2); // false
