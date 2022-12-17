# small-problem


## This Repo conisists of concepts and topic in JS TS 


#### This type of concepts are hilighted in the repo
```ts

// IIFE - immediately invoked function expression

(() => {
  console.log("I got executed immediately");
})();
((name: string, age: number) => {
  console.log(name, age);
})("Nabin", 19);

// async

(async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I got executed immediately");
    }, 1000);
  });
})();

// add two number
((add: (x: number, y: number) => number) => {
  console.log(add(1, 2)); // 3
})((x: number, y: number) => x + y);

// ((add: Function) => {
//   console.log(add(1, 2)); // 3
// })((x: number, y: number) => x + y);

// counter example using iife
((counter: { count: number; next: () => number }) => {
  console.log(counter.count); // 0
  console.log(counter.next()); // 1;
})({
  count: 0,
  next() {
    return ++this.count;
  },
});

((Person) => {
  const person = new Person("Nabin");
  console.log(person.sayHello()); // "Hello, my name is Alice"
})(
  class {
    constructor(public name: string) {}
    sayHello() {
      return `Hello, my name is ${this.name}`;
    }
  }
);
export {};


```ts

const numbers: number[] = [1, 2, 3, 4, 5];
const iterator = numbers[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

```
#### Symbol

```ts

// symbol are not created by new keyword

// const symbol1 = Symbol()

// symbol have description
// Symbol('username')

// symbol are unique

const symbol1 = Symbol("user");
const symbol2 = Symbol("user");
console.log(typeof symbol1 === typeof symbol2); // false


```





