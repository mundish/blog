import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Preview from '../components/Preview';

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      {edges.map(edge => {
        const { frontmatter } = edge.node;
        const { title, date, excerpt, path } = frontmatter;
        return (
          <Preview
            key={frontmatter.path}
            title={title}
            date={date}
            excerpt={excerpt}
            path={path}
          />
        );
      })}
      <div>
        <Link to="/tags">Browse tags</Link>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            excerpt
          }
        }
      }
    }
  }
`;
