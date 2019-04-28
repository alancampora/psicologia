import styled from 'styled-components';

export const StyledWrapper = styled.div`
	font-family: 'SFCartoonistHand', sans-serif;
	letter-spacing: 0.6px;
	font-size: 1.5rem;
	background-color: white;
	padding: 1.3rem;
	margin: 0 5%;

	strong {
		text-transform: uppercase;
		font-weight: bolder;
	}

	h1,
	h2,
	h3 {
		font-family: 'SFArchRival', sans-serif;
		font-weight: 600;
		margin: 1rem 0rem 1rem 0rem;
	}

	p {
		margin: 1rem 0;
	}

	ul {
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
