import styled from "styled-components";

export const StyledWrapper = styled.div``;

export const StyledTitle = styled.h1`
  font-weight: 100;
  text-align: center;
  padding: 1rem;
  font-family: "Pacifico";
  font-size: 3rem;
`;

export const StyledContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  background-color: white;
  text-align: center;
  justify-items: center;
`;
