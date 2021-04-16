import React from "react";
import { useState, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ResultHeader from "../components/sentiment_test/ResultHeader";

type ResultContainerProps = RouteComponentProps;

const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: "purple",
  },
  boxColor: {
    backgroundColor: "white",
  },
}));

const ResultContainer: React.FC<ResultContainerProps> = ({ history }) => {
  const [imgUrl, setImgUrl] = useState<string>();
  const [name, setName] = useState<string>();
  const [quotes, setQuotes] = useState<string>();

  const classes = useStyles();

  const resetTest = () => history.push("/");
  const detailResult = () => history.push("/detail");
  const shareResult = () => console.log("공유하기");

  return (
    <Grid item>
      <ResultHeader imgUrl={imgUrl} quotes={quotes} name={name} />
      <br />
      <Button variant='contained' color='primary' onClick={resetTest}>
        다시하기
      </Button>
      <Button variant='contained' color='primary' onClick={detailResult}>
        상세보기
      </Button>
      <Button variant='contained' color='primary' onClick={shareResult}>
        공유하기
      </Button>
    </Grid>
  );
};

export default withRouter(ResultContainer);
