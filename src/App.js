import React from "react";
import styled from "styled-components";
import HomeComponent from "./modules/home";
import { css } from "styled-components";
const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 30px;
  font-family: Montserrat;
`;

const FontFace = css`
  @font-face {
    font-family: "CustomFont";
    src: url("/Users/archaudhary/Documents/projects/fintown/public/Glegoo-Bold.ttf")
      format("ttf");
  }
`;

const Header = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
  font-family: "CustomFont";
`;
const App = () => {
  return (
    <Container>
      <Header>लेखा जोखा</Header>
      <HomeComponent />
    </Container>
  );
};

export default App;
