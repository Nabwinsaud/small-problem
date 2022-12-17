# small-problem


## This Repo consists of concepts and topic in JS TS 


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


#### Check common string
```ts
// export function twoString(s1: string, s2: string): "yes" | "no" {
//   let sMap: Record<string, boolean> = {};
//   let hasCommonString = false;
//   for (let i = 0; i < s1.length; i++) {
//     for (let j = 0; j < s2.length; j++) {
//       if (s1[i] === s2[j]) {
//         hasCommonString = true;
//         sMap[s1[i]] = true;
//         sMap[s2[j]] = true;
//       }
//     }
//   }
//   return hasCommonString ? "yes" : "no";
// }

// export function twoString

export function twoString(s1: string, s2: string): "yes" | "no" {
  let sMap: Record<string, boolean> = {
    c: true,
    o: true,
    d: true,
    e: true,
  };
  let hasCommonString: boolean = false;
  [...s1].forEach((text: string) => {
    if (!text) {
      sMap[text] = true;
    }
  });

  for (let i = 0; i < s2.length; i++) {
    if (sMap[s2[i]]) {
      hasCommonString = true;
    }
  }

  return hasCommonString ? "yes" : "no";
}

```

### Fizbuzz but slightly different way
```ts
// show the fizz buzz inside the array

function fizzbuzz(n: number): string[] {
  return [...Array(n)].map((_, index) => {
    // return [...Array(n).keys(n)].map((index) => {
    const nums = index + 1;
    console.log(nums);
    if (nums % 2 == 0 && nums % 3 == 5) return "Fizzbuzz";
    if (nums % 3 == 0) return "buzz";
    if (nums % 2 == 0) return "fizz";
    return nums.toString();
  });
}


```

### Generic way of getting random dice roll in TS

```ts
export function rollDice(arr: any[]): number {
  return Math.floor(Math.random() * arr.length);
}

function getRandom<T, S>(arr1: T[], arr2: S[]): [T, S] {
  const a = arr1[rollDice(arr1)];
  const b = arr2[rollDice(arr2)];
  console.log(a);
  return [a, b];
}

const fruits: string[] = ["apple", "banana", "grapes", "mango", "orange"];
const diceNumbers: number[] = [1, 2, 3, 4, 5, 6];

export const log = getRandom(fruits, diceNumbers);

// random string and random number
// function (arr:any[]):number
// output - [1,'grapes']

const rollDiceRandom = (arr: any[]): number => {
  return Math.floor(Math.random() * arr.length);
};

const getRandomDiceAndOther = <T, S>(dice: T[], fruit: S[]): [T, S] => {
  const d = dice[rollDiceRandom(dice)];
  const f = fruit[rollDiceRandom(fruit)];
  return [d, f];
};

getRandomDiceAndOther(fruits, diceNumbers);

// ['grapes',3] // might be whatever just my case


```

### Reduce function in JS

```ts
const messages: { id: string; text: string }[] = [
  {
    id: "1",
    text: "coding",
  },
  {
    id: "2",
    text: "Hi Alexa",
  },
  {
    id: "3",
    text: "wanna code along",
  },
];

interface IUser {
  id: string;
  name: string;
}
const users: IUser[] = [
  {
    id: "1",
    name: "nabin",
  },
  {
    id: "2",
    name: "alexa",
  },
  {
    id: "3",
    name: "john",
  },
];

export const message = messages.map(({ id, text }): string | undefined => {
  const name = users.find((user) => user.id === id)?.name;
  return name;
  //   console.log(name);
});

export const showUserIdAndName = () => {
  const nameId = users.reduce(
    (prev, user: IUser) => ({ ...prev, [user.id]: user?.name }),
    {}
  );
  console.log(nameId);
};


```

### How to extends the Request type in Node(Express) 
##### while we face the problem that we need user but TS complain but this way fix the 
```ts
export interface IRequest extends Request {
  id: any;
  user?: any;
  state?: any;
}


```





