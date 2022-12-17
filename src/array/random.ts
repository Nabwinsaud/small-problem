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
