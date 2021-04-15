import React, { useState, useRef } from "react";
import QuestionHeader from "../components/sentiment_test/QuestionHeader";
import Button from "@material-ui/core/Button";

type question = {
  number: number;
  sentence: string;
  firstOption: string;
  secondOption: string;
};

type QuestionContainerProps = {
  questions: Array<question>;
};

const QuestionContainer = ({ questions }: QuestionContainerProps) => {
  const [question, setQuestion] = useState<question>(questions[0]);
  const [results, setResults] = useState<Array<number>>([]);
  const currentId = useRef<number>(0);
  const changeQuestion = (type: number) => {
    currentId.current += 1;
    setQuestion(questions[currentId.current]);
    addResults(type);
  };
  const addResults = (type: number) => {
    setResults([...results, type]);
  };
  return (
    <div>
      <QuestionHeader question={question} />
      <Button onClick={() => changeQuestion(1)}>{question.firstOption}</Button>
      <Button onClick={() => changeQuestion(2)}>{question.secondOption}</Button>
    </div>
  );
};

QuestionContainer.defaultProps = {
  questions: [
    {
      number: 1,
      sentence: "This is Example Question",
      firstOption: "yes",
      secondOption: "no",
    },
  ],
};

export default QuestionContainer;
