import React from "react";

type IndexHeaderProps = {
  imgUrl: string;
};

const IndexHeader = ({ imgUrl }: IndexHeaderProps) => {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>MVTI</h1>
      </div>
      <div>
        <img src={imgUrl} style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
};

IndexHeader.defaultProps = {
  imgUrl:
    "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe1f0dd89-223b-4236-8e71-3f50d378b46e%2Fdarkknight.jpg?table=block&id=6e52f522-7077-45a1-b4fe-34be07b748c6&width=960&userId=a4e51eef-8052-4c1a-aa01-db7663147cd6&cache=v2",
};

export default IndexHeader;
