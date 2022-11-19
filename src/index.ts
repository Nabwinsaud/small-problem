interface IPerson {
  [key: string]: { [key: string]: number };
}
const persons: IPerson = {
  nabin: { born: 2016, date: 12 },
  john: { born: 2008, date: 3 },
  smith: { born: 2002, date: 6 },
};

// obj to Array
export const obtoArr = Object.keys(persons).map((user) => {
  const users = persons[user];
  // console.log(user);
  return users;
});
console.log(obtoArr);
