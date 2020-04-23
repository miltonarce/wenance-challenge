import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.base};
  font-size: ${(props) => props.theme.fonts.sizeBase};
  & > h1 {
    color: ${(props) => props.theme.colors.base};
    font-size: ${(props) => props.theme.fonts.title};
    font-weight: 600;
  }
`;
