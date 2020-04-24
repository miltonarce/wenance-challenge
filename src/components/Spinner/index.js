import React from "react";
import styled from "styled-components";
import BB8 from "./../../assets/images/spinner.gif";

const Picture = styled.picture`
  & > img {
    height: 60px;
  }
`;

const Spinner = () => (
  <Picture>
    <img src={BB8} alt="Star wars spinner" />
  </Picture>
);

export default Spinner;
