import { useReducer } from "react";

interface ITitle {
  title: string;
}
enum IType {
  ADD = "add",
  REMOVE = "remove",
}
type Action = { type: IType.ADD; payload: string } | { type: IType.REMOVE };

const initialState: ITitle = {
  title: "John",
};

function reducer(state: ITitle, action: Action) {
  const { type } = action;
  switch (type) {
    case IType.ADD:
      return { ...state, title: action.payload };

    case IType.REMOVE:
      return { ...state, title: "" };

    default:
      return state;
  }
}
export default function GetState() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>{state.title}</p>
      <input
        type="text"
        value={state.title}
        onChange={(e) => dispatch({ type: IType.ADD, payload: e.target.value })}
      />
      <button onClick={() => dispatch({ type: IType.REMOVE })}>clear</button>
    </>
  );
}
