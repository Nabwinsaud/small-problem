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
