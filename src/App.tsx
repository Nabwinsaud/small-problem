import { RangeOfNumber } from "./range";
import { Person1, objToArray } from "./range/nesting";
import "./index.css";
import { PascalCase } from "./string/PascalCase";
import { nestedUser, nestClone, mutateClone } from "./object/copyObj";
import fizzbuzz from "./array/fizzbuzz";
import {
  user,
  shallowCopyUser,
  deepCopy,
  objAssign,
  spreadCopy,
} from "./object/copyObj";
import { suggestProduct } from "./array/suggest";
import { message, chatMap } from "./dsa/index";
import { write } from "fs";
import { writeable } from "./stream/index";
import SetMethod from "./components/Set";
import Rating from "./components/rating";
import GetState from "./reducer/index";
import { log } from "./array/random";
function App() {
  const recursion = (num: number): "even" | "odd" => {
    if (num === 0) return "even";
    if (Math.abs(num) === 1) return "odd";
    return recursion(Math.abs(num) - 2);
  };
  // const titles: string[] = ["Nodejs", "Prisma"];
  // const then: number = performance.now();
  // const newTitles = [...titles, "The Full stack coder"];
  // console.log(titles);
  // console.log(newTitles.fill("coding")); //
  // // for (let i = 0; i < 1000_000_000_000_000; i++) {} // don't try this expensive calculation
  // const now: number = performance.now();
  // console.log(`Time delay: ${(now - then).toFixed(3)} milliseconds`);

  // console.log(moreTitles);

  return (
    <div>
      <h1>The Typescript problems </h1>
      <SetMethod />
      <Rating />
      <GetState />
    </div>
  );
}

export default App;
