import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Template = ({ data: { mdx }, pageContext }) => {
  const {
    body,
    frontmatter: { title, date },
  } = mdx;
  const { prev, next } = pageContext;

  return (
    <Layout>
      <header className={'mb-4'}>
        <h1 className={'text-2xl'}>{title}</h1>
        <span>{date}</span>
      </header>
      <div className={'mb-8'}>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <nav>
        <div>
          {prev && <Link to={prev.frontmatter.path}>Previous</Link>}
          {next && <Link to={next.frontmatter.path}>Next</Link>}
        </div>
        <Link to="/">Back to start</Link>
      </nav>
    </Layout>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      body
      frontmatter {
        title
        date
      }
    }
  }
`;

export default Template;
