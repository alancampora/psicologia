import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/';
import Card from '../components/card/';

export default ({ data }) => (
	<Layout title="Compartiendo conocimiento">
		{data.allMarkdownRemark.edges.map(({ node }) => (
			<Card
				slug={node.fields.slug}
				date={node.frontmatter.date}
				title={node.frontmatter.title}
				excerpt={node.excerpt.replace(node.frontmatter.title, '')}
			/>
		))}
	</Layout>
);

export const query = graphql`
	{
		allMarkdownRemark {
			edges {
				node {
					fields {
						slug
					}
					excerpt
					frontmatter {
						title
						date
					}
				}
			}
		}
	}
`;
