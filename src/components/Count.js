import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  console.log(state);
  switch (action) {
    case "incremente":
      return state + 1;

    case "decremente":
      return state - 1;

    case "reinitialiser":
      return initialState;

    default:
      return state;
  }
};

const Count = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{count}</h1>
      <button
        className="btn btn-success m-3"
        onClick={() => dispatch("incremente")}
      >
        +
      </button>
      <button
        className="btn btn-danger m-3"
        onClick={() => dispatch("decremente")}
      >
        -
      </button>
      <button
        className="btn btn-primary m-3"
        onClick={() => dispatch("reinitialiser")}
      >
        0
      </button>
    </div>
  );
};

export default Count;
