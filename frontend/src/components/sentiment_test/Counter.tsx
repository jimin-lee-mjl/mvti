import React from "react";

type CounterProps = {
  cnt: number;
};

const Counter = ({ cnt }: CounterProps) => {
  return <div></div>;
};

Counter.defaultProps = {
  cnt: 0,
};

export default Counter;
