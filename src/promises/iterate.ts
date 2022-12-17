async function isEven(num: number): Promise<boolean> {
  return num % 2 == 0;
}

async function asyncIterator(iterable: IterableIterator<number>) {
  for (const iter of iterable) {
    if (!(await isEven(iter))) {
      return false;
    }
  }
  return true;
}
// return true if the whole
const iterate = asyncIterator([2, 4, 6][Symbol.iterator]());
// first way to iterate
// console.log(iterate.then((res) => console.log(res)));

// 2nd way to resolve promise

// IIF - Immediately innvoked function
(async () => {
  const result = await asyncIterator(
    [1, 2, 3, 4, 5, 6, 8, 8, 9][Symbol.iterator]()
  );
  console.log(result);
})();

// 3rd way to resolve the promise
// async function test() {
//   const result = await asyncIterator([2, 4, 6, 8, 10][Symbol.iterator]());
//   console.log(result);
// }
// test();

export {};
