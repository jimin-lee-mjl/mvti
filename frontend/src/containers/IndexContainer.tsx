import React from "react";
import { useState, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";

import IndexHeader from "../components/sentiment_test/IndexHeader";

type IndexContainerProps = RouteComponentProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    color: {
      backgroundColor: "white",
    },
    boxColor: {
      backgroundColor: "purple",
    },
    box: {
      height: "100%",
      width: "100%",
      boxShadow: "3",
      marginTop: "5px",
      padding: "3px",
    },
  }),
);

const IndexContainer = ({ history }: IndexContainerProps) => {
  const [imgUrl, setImgUrl] = useState<string>();
  const startTest = () => history.push("/question");
  const classes = useStyles();
  return (
    <Container maxWidth='xs'>
      <Grid container direction='column' justify='flex-start' alignItems='center' className={classes.color}>
        <Grid item xs />
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          className={classes.box}
          spacing={3}
        >
          <IndexHeader imgUrl={imgUrl} />
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
          <Box textAlign='center' mt={5}>
            Movie Villain Type Indicator
          </Box>
        </Grid>
        <Grid item xs />
      </Grid>
    </Container>
  );
};

export default withRouter(IndexContainer);
