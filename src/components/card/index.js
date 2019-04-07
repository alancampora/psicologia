import React from 'react';
import { Link } from 'gatsby';
import {
	StyledWrapper,
	StyledTitle,
	StyledDescription,
	StyledFooter,
} from './styled';

const Card = ({ slug, date, title, excerpt }) => (
	<StyledWrapper>
		<StyledTitle>
			<Link to={slug}>{title}</Link>
		</StyledTitle>
		<StyledDescription>{excerpt}</StyledDescription>
		<StyledFooter>
			<Link to={slug}>Leer</Link>
		</StyledFooter>
	</StyledWrapper>
);

export default Card;
