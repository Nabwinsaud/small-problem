export default function example(): Promise<IDetails> {
  return Promise.resolve({
    data: { name: "nabin", age: 19 },
    address: {
      zipcode: "123",
      street: "Kathmandu",
    },
  });
}

interface IDetails {
  data: {
    name: string;
    age: number;
  };
  address: {
    zipcode: string;
    street: string;
  };
}
example().then((result: IDetails) => {
  console.log(result.address.street);
});
