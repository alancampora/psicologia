import React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from '../components/layout';

const postStyle = {
  border: '1px solid black',
  padding: '5px',
  margin: '10px',
};

export default ({data}) => (
  <Layout title="Welcome to my blog">
    {data.allMarkdownRemark.edges.map(({node}) => (
      <div style={postStyle}>
        <Link to={node.fields.slug}>{`[${node.frontmatter.date}]: ${node.frontmatter.title}`} </Link>
        <p> {node.excerpt}</p>
      </div>
    ))}
  </Layout>
);

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          fields{
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
