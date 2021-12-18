import React from "react";
import RButton from "./RButton";
import styled from "styled-components";
import { Button } from "antd";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
`;

// ❌
const MyButton = styled(RButton)`
  width: 250px;
  height: 100px;
  background-color: aqua;
`;

const SRButton = styled.button`
  width: 200px;
  height: 25px;
  margin: 10px;

  outline: none;
  border: ${(props) => (props.isBorder ? "1px solid #999" : "none")};
  border-radius: 5px;

  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: skyblue;
    color: #999;
  }
`;

const SR2 = styled(SRButton)`
  color: red;
`;

const CustomButton = styled(Button)`
  box-shadow: 3px 3px 3px #999;
`;

class App extends React.Component {
  render() {
    return (
      <h1>
        <RButton />

        <SRButton>btn</SRButton>
        <SRButton isBorder={true}>true</SRButton>
        <SRButton isBorder={false}>false</SRButton>

        <SR2>dd</SR2>

        <Button size="small" type="primary">
          antd btn
        </Button>

        <CustomButton size="sall" type="primary">
          Cust
        </CustomButton>

        <Wrapper>
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
        </Wrapper>

        <hr />
        <hr />

        <Wrapper direction="row">
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
        </Wrapper>
      </h1>
    );
  }
}

export default App;
