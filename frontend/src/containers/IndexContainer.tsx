import React from "react";
import { useState, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import IndexHeader from "../components/sentiment_test/IndexHeader";

type IndexContainerProps = RouteComponentProps;

const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: "purple",
  },
  boxColor: {
    backgroundColor: "white",
  },
}));

const IndexContainer: React.FC<IndexContainerProps> = ({ history }) => {
  const [imgUrl, setImgUrl] = useState<string>();

  const startTest = () => history.push("/question");
  const classes = useStyles();
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
            <IndexHeader imgUrl={imgUrl} />
            <br />
            <Box textAlign='center' mt={3}>
              <Button variant='contained' color='primary' onClick={startTest}>
                테스트 시작하기
              </Button>
              <br />
              <br />
              <Button variant='contained' color='primary' onClick={startTest}>
                전 착한 사람인데요?
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

export default withRouter(IndexContainer);
