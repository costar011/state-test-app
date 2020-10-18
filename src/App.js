import React from "react";
import { Route } from "react-router-dom";
import Navigation from "./Layouts/Navigation";
import Want from "./Screens/Want";
import Sleep from "./Screens/Sleep";
import Footer from "./Layouts/Footer";
import Button from "./Button";


class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={Navigation}></Route>

        <Route path="/want" component={Want}></Route>

        <Route path="/sleep" component={Sleep}></Route>

        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default App;
