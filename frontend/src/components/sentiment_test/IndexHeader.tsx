import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ImageSlider from "./ImageSlider";

type IndexHeaderProps = {
  imgUrl: string;
};

const url =
  "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe1f0dd89-223b-4236-8e71-3f50d378b46e%2Fdarkknight.jpg?table=block&id=6e52f522-7077-45a1-b4fe-34be07b748c6&width=960&userId=a4e51eef-8052-4c1a-aa01-db7663147cd6&cache=v2";
const style = {
  backgroundImage: `url(${url})`,
};

const IndexHeader = ({ imgUrl }: IndexHeaderProps) => {
  return (
    <Grid item xs={12}>
      <h1>MVTI</h1>
      <p>나 는 어 떤 빌 런 유 형 일 까 ? 😈</p>
      <ImageSlider />
      <Grid item xs={12} style={{ margin: "30px" }} />
      {/* <img
        src={imgUrl}
        style={{ width: "400px", height: "inherit", objectFit: "cover", objectPosition: "50% 50%" }}
      /> */}
    </Grid>
  );
};

IndexHeader.defaultProps = {
  imgUrl:
    "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe1f0dd89-223b-4236-8e71-3f50d378b46e%2Fdarkknight.jpg?table=block&id=6e52f522-7077-45a1-b4fe-34be07b748c6&width=960&userId=a4e51eef-8052-4c1a-aa01-db7663147cd6&cache=v2",
};

export default IndexHeader;
