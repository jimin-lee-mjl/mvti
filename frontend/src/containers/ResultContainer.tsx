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

  const resetTest = () => history.push("/index");
  const detailResult = () => history.push("/detail");
  const shareResult = () => console.log("공유하기");

  return (
    <div>
      <Grid container spacing={10} className={classes.color}>
        <Grid item xs />
        <Grid item xs={6}>
          <Box
            width='100%'
            height='90%'
            justifyContent='center'
            boxShadow={3}
            mt={5}
            p={3}
            className={classes.boxColor}
          >
            <ResultHeader imgUrl={imgUrl} quotes={quotes} name={name} />
            <br />
            <Box textAlign='center' mt={3}>
              <Button variant='contained' color='primary' onClick={resetTest}>
                다시하기
              </Button>
              <br />
              <br />
              <Button variant='contained' color='primary' onClick={detailResult}>
                상세보기
              </Button>
              <br />
              <br />
              <Button variant='contained' color='primary' onClick={shareResult}>
                공유하기
              </Button>
            </Box>
            <Box textAlign='center' mt={5}>
              Movie Villain Type Indicator
            </Box>
          </Box>
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  );
};

export default withRouter(ResultContainer);
