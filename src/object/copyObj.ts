// shallow copy

// depp copy in ts JSON.Strignify() and json.parse
// Object.assign()
// spread opearator

interface IUser {
  name: string;
  age: number;
  profession?: string;
}
export const user: { name: string; age: number; profession?: string } = {
  name: "Nabin",
  age: 19,
  profession: "full stack developer",
};

export let shallowCopyUser = user;
shallowCopyUser.age = 42;

// deep copy
// doesnot impact on previous object
export let deepCopy: IUser = JSON.parse(JSON.stringify(user));
deepCopy.name = "John";

// Object assign
export let objAssign: IUser = Object.assign({}, user);
objAssign.name = "Ankit"; // will not affect the original

// Object.assign() will copy everything into new object including any function
// mutating the copied object doesnot affect the original object

// spread operator
// best way is to use spread operator doesnot affect the previous obj
export let spreadCopy = { ...user };
spreadCopy.name = "Bill ";

// but if we have obj inside nested obj then spread operator doesnot deep clone

interface INestedUser extends IUser {
  address: {
    street: string;
    zip?: string | undefined;
  };
}
export let nestedUser: INestedUser = {
  name: "Larry",
  age: 40,
  profession: "CEO",
  address: {
    street: "CA",
    zip: "301",
  },
};

export let nestClone = { ...nestedUser };
nestClone.address.street = "Seatle"; // affect the previous obj

export let mutateClone = { ...nestedUser, address: { ...nestClone.address } };
mutateClone.name = "Smith";
mutateClone.address.street = "Texas";
mutateClone.address.zip = "100";

// now it doesnot affect the original obj
