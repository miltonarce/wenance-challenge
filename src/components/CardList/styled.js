import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1rem;
  & > picture {
    margin-top: 7rem;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  width: 50%;
  & > li {
    transition: 0.2s;
  }
  & > li:hover {
    -webkit-box-shadow: 10px 10px 0px -4px rgba(237, 237, 237, 1);
    -moz-box-shadow: 10px 10px 0px -4px rgba(237, 237, 237, 1);
    box-shadow: 10px 10px 0px -4px rgba(237, 237, 237, 1);
  }
`;
