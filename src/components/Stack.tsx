import { useReducer } from "react";
// we can reuse this types but its ok for this
interface IRow {
  id: string;
  name: string;
}
const rows: IRow[] = [
  { id: "1", name: "Row 1" },
  { id: "2", name: "Row 2" },
  { id: "3", name: "Row 3" },
  { id: "4", name: "Row 4" },
];

enum IActionEnum {
  REMOVE = "remove",
  UNDO = "undo",
}

interface IAction {
  type: IActionEnum;
  payload?: IRow;
}
interface IState {
  rows: IRow[];
  history: [];
}
const initialState = {
  rows,
  history: [], // it is the stack
};

const Stack = () => {
  return <div>Stack</div>;
};

export default Stack;
