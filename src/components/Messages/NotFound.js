import React from "react";
import PropTypes, { string } from "prop-types";
import styled from "styled-components";
import YODA from "./../../assets/images/yoda1.png";

const Div = styled.div`
  margin-top: 6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & picture > img {
    height: 16rem;
  }
  & > h2 {
    color: #b0b1b2;
  }
`;

const NotFoundMessage = ({ message }) => (
  <Div>
    <picture>
      <img src={YODA} alt="Not found image yoda" />
    </picture>
    <h2>{message}</h2>
  </Div>
);

NotFoundMessage.propTypes = {
  message: PropTypes.string,
};

export default NotFoundMessage;
