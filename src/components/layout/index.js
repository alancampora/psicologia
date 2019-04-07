import React from 'react';
import { StyledWrapper, StyledTitle} from './styled';

const Layout = ({ title, children }) => (
	<StyledWrapper>
		<StyledTitle> {title} </StyledTitle>
		<div> {children} </div>
	</StyledWrapper>
);

export default Layout;
