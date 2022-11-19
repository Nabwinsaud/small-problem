interface IPerson {
  name: string;
  others: IPerson | null;
}

export const Person1: IPerson = {
  name: "Nabin",
  others: {
    name: "Nabin",
    others: {
      name: "john",
      others: null,
    },
  },
};

// object to array

export const objToArray = (person: IPerson | null) => {
  const name: string[] = [];
  while (person) {
    name.push(person.name);
    // [person.name];
    person = person.others;
  }

  return name;
};
