import styled from "styled-components";

export const StyledWrapper = styled.div`
  background-color: white;
  padding: 1.3rem;
  margin: 0 10%;

  h1,
  h2,
  h3 {
    font-weight: 600;
    margin: 2rem 0rem;
  }

  p {
    margin: 1rem 0;
    font-size: 1.2rem;
  }

  ul {
    font-size: 1.1rem;
    margin: 1rem auto;
		width: 90%;
    list-style-type: square;
  }

  table {
    font-size: 1.2rem;
    width: 90%;
    margin: 0 auto;
  }
`;

export const StyledBody = styled.div`
  background-color: #ff5b5b;
`;
