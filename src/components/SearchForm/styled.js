import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  & .form-search {
    display: flex;
    flex-direction: row;
    & > div > input:focus {
      outline: none;
    }
    & > div > label {
      display: none;
    }
    & > div > input {
      padding: 0.5rem 2rem 0.5rem 0.5rem;
      border-radius: 4px;
      border: 2px solid ${(props) => props.theme.colors.secondary};
      color: #b0b1b2;
      font-size: 1.2rem;
    }
    & > div > button {
      border: 2px solid;
      background: ${(props) => props.theme.colors.secondary};
      font-size: 1.2rem;
      color: white;
      border-radius: 4px;
      padding: 0.5rem 2rem 0.5rem 2rem;
      margin-left: 1rem;
      text-aling: center;
      transition: 0.2s;
      cursor: pointer;
    }
    & > div > button:hover {
      background: #c7c8c9;
    }
    & > div > button:focus {
      outline: none;
    }
  }
`;
