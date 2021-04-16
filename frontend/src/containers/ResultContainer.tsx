import React from "react";
import { useState, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Box, Grid, Button, Tooltip, Typography, Popover } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

// import ResultHeader from "../components/sentiment_test/ResultHeader";
import Counter from "../components/sentiment_test/Counter";
import Profile from "../components/detail/Profile";
import VillainRelation from "../components/sentiment_test/VillainRelation";
import Result from "../components/detail/Result";

type ResultContainerProps = RouteComponentProps<any>;

// const useStyles = makeStyles((theme) => ({
//   color: {
//     backgroundColor: "purple",
//   },
//   boxColor: {
//     backgroundColor: "white",
//   },
// }));

const ResultContainer = ({ history }: ResultContainerProps) => {
  const [imgUrl, setImgUrl] = useState<string>();
  const [name, setName] = useState<string>();
  const [quotes, setQuotes] = useState<string>();

  const resetTest = () => history.push("/");
  const detailResult = () => history.push(`/introduce`);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const copy = () => {
    const tmp = document.createElement("textarea");
    document.body.appendChild(tmp);
    tmp.value = "http://elice-kdt-ai-track-vm-da-05.koreacentral.cloudapp.azure.com";
    // tmp.value = "http://localhost:3000";
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    copy();
    setAnchorEl(event.currentTarget);
    setTimeout(() => setAnchorEl(null), 1000);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Grid item xs={12}>
      <Profile />
      <br />
      <Counter />
      <Result />
      <VillainRelation />
      <Button variant='contained' color='primary' onClick={resetTest}>
        다시하기
      </Button>
      <Button variant='contained' color='primary' onClick={detailResult}>
        상세보기
      </Button>
      <PopupState variant='popover' popupId='demo-popup-popover'>
        {(popupState: any) => (
          <div>
            {/* <Tooltip title='Copy'> */}
            <Button aria-describedby={id} variant='contained' color='primary' onClick={handleClick}>
              공유하기
            </Button>
            {/* </Tooltip> */}
            <Popover
              {...bindPopover(popupState)}
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Box p={2}>
                <Typography>클립보드에 복사되었습니다</Typography>
              </Box>
            </Popover>
          </div>
        )}
      </PopupState>
    </Grid>
  );
};

export default withRouter(ResultContainer);
