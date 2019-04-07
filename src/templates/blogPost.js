import React from 'react';
import { graphql } from 'gatsby';
import { StyledWrapper, StyledBody } from './styled';

export default ({ data }) => {
	const post = data.markdownRemark;
	const htmlContent = { __html: post.html };

	return (
		<StyledBody>
			<StyledWrapper>
				<div dangerouslySetInnerHTML={htmlContent} />
			</StyledWrapper>
		</StyledBody>
	);
};

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				date
			}
		}
	}
`;
