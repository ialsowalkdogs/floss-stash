import React, { FC } from "react";

interface CounterProps {
  add?: () => any;
  remove?: () => any;
}

const Counter: FC<CounterProps> = ({ add, remove }) => {
  return (
    <div className="flex flex-col center">
      <button
        className="w-8 border-2 border-indigo-600 border-b-0 rounded-t-lg"
        onClick={add}
      >
        +
      </button>
      <button
        className="w-8 border-2 border-indigo-600 rounded-b-lg"
        onClick={remove}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
