import React from "react";
import { Grid } from "@material-ui/core";

type CounterProps = {
  cnt: number;
  type: number;
};

const Counter = ({ cnt, type }: CounterProps) => {
  return (
    <Grid style={{ fontSize: "2rem", fontWeight: "bold" }}>
      {type === 1 ? (
        <p>해당 유형에 매칭된 사용자 수는 현재까지 {<span className='mvti'>{cnt}</span>}명 입니다</p>
      ) : (
        <p>당신과 같은 빌런 유형의 사람은 현재까지 {<span className='mvti'>{cnt}</span>}명 입니다</p>
      )}
    </Grid>
  );
};

Counter.defaultProps = {
  cnt: 0,
  type: 0,
};

export default Counter;
