import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";
import ProfileCard from "../components/detail/ProfileCard";

type IntroContainerProps = {};
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";

const getVillains = () =>
  axios({
    method: "get",
    url: "/api/character",
  });

const IntroContainer = () => {
  const [villains, setVillains] = useState([]);
  useEffect(() => {
    if (villains.length == 0) {
      getVillains().then((res) => {
        console.log(res.data);
        setVillains(res.data);
      });
    }
  }, [villains]);
  return (
    <>
      <Grid item xs={12}>
        <h2>MVTI의 서비스는..?</h2>
        <p>우리 서비스는 영화 빌런들의 대사에 대한 감정 분석 결과를 토대로 심리테스트를 만들었습닏.</p>
        {villains.map((v: any) => (
          <ProfileCard key={v.id} name={v.name} imgurl={v.character_img_url} />
        ))}
      </Grid>
    </>
  );
};

IntroContainer.defaultProps = {};

export default IntroContainer;
