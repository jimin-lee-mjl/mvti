import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

type IndexProps = {};

const Index = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          MVTI
        </Typography>
        <Box>
          <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe1f0dd89-223b-4236-8e71-3f50d378b46e%2Fdarkknight.jpg?table=block&id=6e52f522-7077-45a1-b4fe-34be07b748c6&width=960&userId=a4e51eef-8052-4c1a-aa01-db7663147cd6&cache=v2" />
        </Box>
        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
          테스트 시작하기
        </Button>
        <Box mt={8}>Movie Villain Type Indicator</Box>
      </div>
    </Container>
  );
};

Index.defaultProps = {};
export default Index;
