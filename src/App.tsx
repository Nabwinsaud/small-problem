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
function App() {
  const recursion = (num: number): "even" | "odd" => {
    if (num === 0) return "even";
    if (Math.abs(num) === 1) return "odd";
    return recursion(Math.abs(num) - 2);
  };

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
