type keys = "name" | "age" | "greet" | "profession" | "skills" | "salary";
export const person: Map<keys, any> = new Map();
person.set("greet", (message: string) => console.log(message));
person.set("name", "john");
person.set("salary", [1000, 2000, 3000, 5000, 400000, 200000, 10000]);

console.log(person.get("greet")("hello there"));
// hello there
