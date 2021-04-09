import React from 'react';
import { Box, Button } from '@material-ui/core';

type ResultProps = {};

const Result = () => {
  return (
    <div>
      <h1>짐 모리아티</h1>
      <Box>이미지 넣기</Box>
      <strong>명대사</strong>
      <p>인물 설명</p>

      <Button variant='contained' color='primary' href='#contained-buttons'>
        상세보기
      </Button>
      <br />
      <Button variant='contained' color='primary' href='#contained-buttons'>
        다시하기
      </Button>
      <br />
      <Button variant='contained' color='primary' href='#contained-buttons'>
        친구들에게 공유하기
      </Button>
      <br />
    </div>
  );
};

Result.defaultProps = {};

export default Result;
