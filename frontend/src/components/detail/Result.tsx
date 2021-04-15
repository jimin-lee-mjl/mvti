import React, { useState, useEffect, useRef } from "react";
import { Radar } from "react-chartjs-2";
import WordCloud from "wordcloud";

type ResultProps = {
  url: string;
};

const data = {
  labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "rgba(179,181,198,1)",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: [65, 59, 90, 81, 56, 55, 40],
    },
    {
      label: "My Second dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      pointBackgroundColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255,99,132,1)",
      data: [28, 48, 40, 19, 96, 27, 100],
    },
  ],
};

const Result = ({ url }: ResultProps) => {
  const myCanvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (myCanvas.current)
      WordCloud(myCanvas.current, {
        list: [
          ["foo", 12],
          ["bar", 6],
        ],
        weightFactor: 5,
        fontFamily: "Times, serif",
        color: function (word, weight) {
          return weight === 12 ? "#f02222" : "#c09292";
        },
        rotateRatio: 0.5,
        backgroundColor: "#ffe0e0",
        wait: 500,
      });
  });
  return (
    <div>
      <div>
        <p>Word Cloud</p>
        {/* <img src={url} /> */}
        <canvas ref={myCanvas}></canvas>
      </div>
      <div>
        <Radar data={data} />
      </div>
    </div>
  );
};

Result.defaultProps = {
  url:
    "https://kdt-gitlab.elice.io/001-part3-moviecharacter/team5/project-MVTI/-/raw/master/data-analytics/visualization/wordCloudImgs/Fletcher.png",
};

export default Result;
