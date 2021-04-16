import React, { useState, useRef, useEffect } from "react";
import { RouteComponentProps, withRouter, Redirect } from "react-router";

import axios from "axios";
import Button from "@material-ui/core/Button";

import Loading from "../components/sentiment_test/Loading";
import QuestionHeader from "../components/sentiment_test/QuestionHeader";
import ProgressBar from "../components/sentiment_test/ProgressBar";
import type { question } from "../data/QuestionList";
import questionList from "../data/QuestionList";

type QuestionContainerProps = RouteComponentProps;

const QuestionContainer = ({ history }: QuestionContainerProps) => {
  const currentId = useRef<number>(0);
  const [question, setQuestion] = useState(questionList["questionList"][0]);
  const [results, setResults] = useState<Array<string>>([]);

  useEffect(() => {
    if (results.length === 10) {
      const data = { words: results };
      axios({
        method: "post",
        url: "/api/sentiment/",
        data,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }).then((res) => {
        console.log("전송 성공");
        history.push({ pathname: "/result", state: { data: res.data } });
      });
    }
  }, [results.length]);
  const changeQuestion = async (type: string) => {
    currentId.current += 1;
    setQuestion(questionList["questionList"][currentId.current]);
    addResults(type);
  };

  const addResults = (type: string) => {
    setResults([...results, type]);
  };
  console.log(results);
  const sentenceItems =
    currentId.current >= 10
      ? []
      : questionList["questionList"][currentId.current]["options"].map((option: Array<string>) => (
          <>
            <Button variant='contained' color='primary' onClick={() => changeQuestion(option[0])}>
              {option[1]}
            </Button>
            &nbsp;
          </>
        ));
  return (
    <div>
      {results.length === 10 ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <ProgressBar stepIndex={currentId.current} /> <QuestionHeader question={question} />
        </>
      )}
      {sentenceItems}
    </div>
  );
};

export default withRouter(QuestionContainer);
