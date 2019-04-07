import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';

export default ({data}) => (
  <Layout title="Welcome to my blog">
    <table>
      <tr>
        <th>relative path</th>
        <th>extention</th>
        <th>pretty size</th>
      </tr>
      {data.allFile.edges.map(({node}) => (
        <tr>
          <td>{node.relativePath}</td>
          <td>{node.extension}</td>
          <td>{node.prettySize}</td>
        </tr>
      ))}
    </table>
  </Layout>
);

export const query = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
          extension
          prettySize
        }
      }
    }
  }
`;
