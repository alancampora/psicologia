import React from 'react';
import { StyledWrapper, StyledTitle, StyledContent} from './styled';

const Layout = ({ title, children }) => (
	<StyledWrapper>
		<StyledTitle> {title} </StyledTitle>
		<StyledContent> {children} </StyledContent>
	</StyledWrapper>
);

export default Layout;
