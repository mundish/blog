import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Preview from '../components/Preview';

const Page = ({ data }) => {
  const { edges } = data.allMdx;

  return (
    <Layout>
      {edges.map(edge => {
        const { frontmatter } = edge.node;
        const { title, date, excerpt, path } = frontmatter;
        return (
          <Preview
            key={path}
            title={title}
            date={date}
            excerpt={excerpt}
            path={path}
          />
        );
      })}
      <div className={'text-center mt-4'}>
        <Link className={'underline hover:no-underline'} to="/tags">
          Browse tags
        </Link>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
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

export default Page;
