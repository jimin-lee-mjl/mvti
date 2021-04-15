import React, { useState, useEffect } from "react";
import Profile from "../components/detail/Profile";
import Result from "../components/detail/Result";
import axios from "axios";

type DetailProps = {};

axios.defaults.headers["Access-Control-Allow-Origin"] = "*";

const getVillains = () =>
  axios({
    method: "get",
    url: "/api/character",
  });

const Detail = ({}: DetailProps) => {
  const [villains, setVillains] = useState([]);
  useEffect(() => {
    if (villains.length == 0) {
      getVillains().then((res) => {
        console.log(res);
      });
    }
  });
  return (
    <div>
      <Profile />
      <Result />
    </div>
  );
};

Detail.defaultProps = {};

export default Detail;
