async function checkIsEven(num: number): Promise<boolean> {
  return num % 2 == 0;
}

async function testAsyncIterator(iterator: IterableIterator<number>) {
  for (const num of iterator) {
    if (!(await checkIsEven(num))) {
      return false;
    }
  }
  return true;
}

const testIter = testAsyncIterator(
  [1, 2, 3, 4, 5, 6, 8, 8, 9][Symbol.iterator]()
);

export {};
