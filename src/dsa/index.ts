// Map
// Set
// Stack
// Queue
// Tree

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

export const chatMap = () => {
  const nameId = users.reduce(
    (prev, user: IUser) => ({ ...prev, [user.id]: user?.name }),
    {}
  );
  console.log(nameId);
};

export const usingMap = () => {};
// Set
