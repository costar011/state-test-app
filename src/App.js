import React from "react";
import { Route } from "react-router-dom";
import Navigation from "./Layouts/Navigation";
import Want from "./Screens/Want";
import Sleep from "./Screens/Sleep";
import Footer from "./Layouts/Footer";
import Button from "./Button";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      changeValue: 0,
    };
  }
  render() {
    return (
      <div>

        <h1>{this.state.changeValue}</h1>
        <Button name={`INCRMENT`} action={this._increment} />
        <Button name={`DECRMENT`} action={this._decrement} />

        <Route path="/" component={Navigation}></Route>

        <Route path="/want" component={Want}></Route>

        <Route path="/sleep" component={Sleep}></Route>

        <Route path="/" component={Footer} />
      </div>
    );
  }

  _increment = () => {
    this.setState((prevState) => {
      return { changeValue: prevState.changeValue + 1 };
    });
  };
  _decrement = () => {
    this.setState((prevState) => {
      return { changeValue: prevState.changeValue - 1 };
    });
  };
}

export default App;
