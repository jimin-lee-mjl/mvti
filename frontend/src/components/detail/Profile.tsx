import React from "react";
import Grid from "@material-ui/core/Grid";

type ProfileProps = {
  script: string;
};

const Profile = ({ script }: ProfileProps) => {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <div>
            <img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb7439e9e-fc74-452f-b605-08535cdefebb%2FUntitled.png?table=block&id=7b108a0f-0746-4245-a86a-c908423d1775&width=900&userId=479b5c03-3ace-4f65-938c-026795f1021d&cache=v2' />
          </div>
        </Grid>
        <Grid item xs={6} style={{ verticalAlign: "center" }}>
          <h3>{script}</h3>
        </Grid>
      </Grid>
    </>
  );
};

Profile.defaultProps = {
  script: "장미는 빨갛고 제비꽃은 파랗지. 사람은 죽고. 죽는게 사람들이 하는 일이야.",
};

export default Profile;
