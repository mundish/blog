import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

const Template = ({ data: { markdownRemark }, pageContext }) => {
  const {
    html,
    frontmatter: { title, date },
  } = markdownRemark;
  const { prev, next } = pageContext;

  return (
    <Layout>
      <header className={'mb-4'}>
        <h1 className={'text-2xl'}>{title}</h1>
        <span>{date}</span>
      </header>
      <div className={'mb-8'} dangerouslySetInnerHTML={{ __html: html }} />
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
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;

export default Template;
