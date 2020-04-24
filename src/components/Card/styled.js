import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  margin: 2rem;
  margin-left: 0;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  border-radius: 4px;
  padding: 0.7rem 1.5rem;
  width: 100%;
  & > div > h2 {
    color: #616263;
    text-transform: uppercase;
  }
  & > div > label {
    display: block;
    margin-bottom: 0.5rem;
    & > strong {
      color: ${(props) => props.theme.colors.primary};
    }
  }
  & > div > button {
    border: none;
    background: ${(props) => props.theme.colors.primary};
    font-size: 0.8rem;
    color: white;
    border-radius: 4px;
    padding: 0.5rem 2rem 0.5rem 2rem;
    margin-left: 1rem;
    text-aling: center;
    transition: 0.2s;
    cursor: pointer;
  }
  & > div > button:hover {
    background: #f2984f;
  }
  & > div > button:focus {
    outline: none;
  }
`;
