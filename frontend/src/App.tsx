import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Index from "./pages/Index";
import Result from "./pages/Result";
import Questions from "./pages/Questions";
import Detail from "./pages/Detail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/result' component={Result} />
        <Route path={["/question", "/question:@question_id"]} component={Questions} />
        <Route path='/detail' component={Detail} />
      </Switch>
    </>
  );
}

export default App;
