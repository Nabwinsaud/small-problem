export function getUser(userId: string | number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Nabin");
    }, 500);
  });
}

function showBankBalance(user: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === "Nabin") resolve("$1,000_00");
      reject("user not found");
    }, 1000);
  });
}

const promises: Promise<number>[] = [
  new Promise((resolve: (value: number) => void) => resolve(1)),
  new Promise((resolve: (value: number) => void) => resolve(2)),
  new Promise((resolve: (value: number) => void) => resolve(3)),
];

async function resolvePromise() {
  for await (const res of promises) {
    console.log(res);
  }
}

console.log(resolvePromise()); // 1, 2,3
// export {};
