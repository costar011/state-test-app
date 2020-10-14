import React from "react";
import { Route } from "react-router-dom";
import Navigation from "./Layouts/Navigation";
import Want from "./Screens/Want";
import Sleep from "./Screens/Sleep";
import MM01 from "./Screens/MM01"


class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={Navigation}></Route>

        <Route path="/want" component={Want}></Route>

        <Route path="/sleep" component={Sleep}></Route>

        <Route path="/mm01" component={MM01}></Route>

        
      </div>
    );
  }
}

export default App;
