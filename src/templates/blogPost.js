import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import StartLink from '../components/StartLink';

const Template = ({ data: { mdx }, pageContext }) => {
  const {
    body,
    frontmatter: { title, date },
  } = mdx;
  const { prev, next } = pageContext;

  return (
    <Layout>
      <header className={'mb-4'}>
        <h1 className={'text-3xl'}>{title}</h1>
        <span className={'font-serif text-sm'}>{date}</span>
      </header>
      <div className={'mb-4 font-serif'}>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <nav>
        <div>
          {prev && <Link to={prev.frontmatter.path}>« Previous</Link>}
          {prev && next && ' ~ '}
          {next && <Link to={next.frontmatter.path}>Next »</Link>}
        </div>
        <StartLink />
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
