import React, { useState, useRef } from "react";
import QuestionHeader from "../components/sentiment_test/QuestionHeader";
import ProgressBar from "../components/sentiment_test/ProgressBar";
import type { question } from "../data/QuestionList";
import questionList from "../data/QuestionList";

import Button from "@material-ui/core/Button";

const QuestionContainer = () => {
  const [question, setQuestion] = useState(questionList["questionList"][0]);
  const [results, setResults] = useState<Array<number>>([]);
  const currentId = useRef<number>(0);
  const changeQuestion = (type: number) => {
    currentId.current += 1;
    setQuestion(questionList["questionList"][currentId.current]);
    addResults(type);
  };
  const addResults = (type: number) => {
    setResults([...results, type]);
  };
  const sentenceItems = questionList["questionList"][currentId.current]["options"].map((sentence: string) => (
    <>
      <Button variant='contained' color='primary' onClick={() => changeQuestion(1)}>
        {sentence}
      </Button>
    </>
  ));
  return (
    <div>
      <ProgressBar stepIndex={currentId.current} />
      <QuestionHeader question={question} />
      {sentenceItems}
    </div>
  );
};

QuestionContainer.defaultProps = {
  questions: [
    {
      number: 1,
      sentence: "This is Example Question",
      options: ["dsfdf", "ddffff"],
    },
  ],
};

export default QuestionContainer;
