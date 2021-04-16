import React, { useState, useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import { Radar } from "react-chartjs-2";
import WordCloud from "wordcloud";

type ResultProps = {
  url: string;
  sdata?: Array<number>;
};

const Result = ({ url, sdata }: ResultProps) => {
  const myCanvas = useRef<HTMLCanvasElement>(null);
  const div = useRef<HTMLDivElement>(null);
  const data = {
    labels: [
      "anger",
      "anticipation",
      "disgust",
      "fear",
      "joy",
      "negative",
      "positive",
      "sadness",
      "surprise",
      "trust",
    ],
    datasets: [
      {
        label: "Sentiment",
        backgroundColor: "rgba(29, 38, 113, 0.2)",
        borderColor: "rgba(29, 38, 113, 1)",
        pointBackgroundColor: "rgba(29, 38, 113, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(29, 38, 113, 1)",
        data: sdata,
      },
      // {
      //   label: "My Second dataset",
      //   backgroundColor: "rgba(255,99,132,0.2)",
      //   borderColor: "rgba(255,99,132,1)",
      //   pointBackgroundColor: "rgba(255,99,132,1)",
      //   pointBorderColor: "#fff",
      //   pointHoverBackgroundColor: "#fff",
      //   pointHoverBorderColor: "rgba(255,99,132,1)",
      //   data: [28, 48, 40, 19, 96, 27, 100],
      // },
    ],
  };

  return (
    <>
      <Grid item xs={12}>
        <p>감정 분석표</p>
        <Radar
          data={data}
          width={600}
          height={300}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <p>Word Cloud</p>
        <img src={url} style={{ width: "100%", objectFit: "cover" }} />
        {/* <canvas ref={myCanvas}></canvas> */}
      </Grid>
    </>
  );
};

Result.defaultProps = {
  url:
    "https://kdt-gitlab.elice.io/001-part3-moviecharacter/team5/project-MVTI/-/raw/master/data-analytics/visualization/wordCloudImgs/Fletcher.png",
};

export default Result;
