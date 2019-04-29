import styled from 'styled-components';

export const StyledWrapper = styled.div`
	box-shadow: rgba(136, 136, 136, 0.14) 10px 10px 20px;
	width: 300px;
	background-color: #ff5b5b;
	padding: 1rem;
	border-radius: 20px;
  margin: 1rem;
`;

export const StyledTitle = styled.h2`
	font-family: 'SFArchRival', sans-serif;
	text-align: center;
	font-weight: 300;
  margin: 0;
	a {
		text-decoration: none;
		color: white;
	}
`;

export const StyledDescription = styled.p`
	font-family: 'SFCartoonistHand', sans-serif;
  font-size: 1.5em;
	padding: 1.1rem;
`;

export const StyledFooter = styled.div`
	font-family: 'SFArchRival', sans-serif;
	text-align: right;
	a {
		text-decoration: none;
		color: white;
	}
`;
