import React from 'react';
import { graphql } from 'gatsby';
import { StyledWrapper } from './styled';

export default ({ data }) => {
	const post = data.markdownRemark;
	const htmlContent = { __html: post.html };

	return (
		<StyledWrapper>
			<div dangerouslySetInnerHTML={htmlContent} />
		</StyledWrapper>
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
