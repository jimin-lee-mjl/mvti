import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Grid, Button } from "@material-ui/core";
import IndexHeader from "../components/sentiment_test/IndexHeader";
import PageTemplate from "../components/PageTemplate";

type IndexContainerProps = RouteComponentProps;

const IndexContainer = ({ history }: IndexContainerProps) => {
  const startTest = () => history.push("/question");
  return (
    <>
      <IndexHeader />
      <Grid item>
        <Button variant='contained' color='primary' onClick={startTest}>
          테스트 시작하기
        </Button>
      </Grid>
      <Grid item>
        <Button variant='contained' color='primary' onClick={startTest}>
          전 착한 사람인데요?
        </Button>
      </Grid>
    </>
  );
};

export default withRouter(IndexContainer);
