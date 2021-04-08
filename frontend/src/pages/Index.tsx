import React from 'react';
import { Box, Button } from '@material-ui/core';

type IndexProps = {};

const Index = () => {
  return (
    <div>
      <Box justifyContent="center">
        <h1>MVTI</h1>
      </Box>
      <p>10가지 문항으로 나의 악당 성향 파악하기</p>
      <Box component="span" m={1}>
        이미지 넣기
      </Box>
      <br />
      <Button variant="contained" color="primary" href="#contained-buttons">
        테스트 시작하기
      </Button>
    </div>
  );
};

Index.defaultProps = {};
export default Index;