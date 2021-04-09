import React from 'react';
import { Box, Button } from '@material-ui/core';

type IndexProps = {};

const Index = () => {
  return (
    <div>
      <Box justifyContent='center'>
        <h1>MVTI</h1>
      </Box>
      <p>10가지 문항으로 나의 악당 성향 파악하기</p>
      <Box component='span' m={1}>
        <img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe1f0dd89-223b-4236-8e71-3f50d378b46e%2Fdarkknight.jpg?table=block&id=6e52f522-7077-45a1-b4fe-34be07b748c6&width=960&userId=a4e51eef-8052-4c1a-aa01-db7663147cd6&cache=v2' />
      </Box>
      <br />
      <Button variant='contained' color='primary' href='#contained-buttons'>
        테스트 시작하기
      </Button>
    </div>
  );
};

Index.defaultProps = {};
export default Index;
