import React from "react";
import { useState, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ResultHeader from "../components/sentiment_test/ResultHeader";
import Counter from "../components/sentiment_test/Counter";
import Profile from "../components/detail/Profile";
import VillainRelation from "../components/sentiment_test/VillainRelation";
import Result from "../components/detail/Result";

type ResultContainerProps = RouteComponentProps<any>;

const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: "purple",
  },
  boxColor: {
    backgroundColor: "white",
  },
}));

const ResultContainer = ({ history }: ResultContainerProps) => {
  console.log("가져왔다!");
  const data = JSON.parse(sessionStorage.getItem("data") || "{}")[0];
  console.log(data);
  const [imgUrl, setImgUrl] = useState<string>();
  const [name, setName] = useState<string>();
  const [quotes, setQuotes] = useState<string>();

  const classes = useStyles();

  const resetTest = () => history.push("/");
  const detailResult = () => history.push(`/introduce`);
  const shareResult = () => console.log("공유하기");

  return (
    <Grid item xs={12}>
      <Profile
        name={data.name}
        script={data.best_talk}
        mvti={data.mvti_type}
        imgurl={data.character_img_url}
      />
      <br />
      <Counter cnt={data.count} type={data.count} />
      <Result url={data.wc_url} />
      <VillainRelation partner={data.partner} rival={data.rival} />
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
