import React from "react";
import { Route } from "react-router-dom";
import Navigation from "./Layouts/Navigation";
import Want from "./Screens/Want";
import Sleep from "./Screens/Sleep";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={Navigation}></Route>
      </div>
    );
  }
}

export default App;
