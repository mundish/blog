import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import StartLink from '../components/StartLink';
import CodeBlock from '../components/CodeBlock';
import Headings from '../components/Heading';

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
        <MDXProvider
          components={{
            h1: Headings.H1,
            h2: Headings.H2,
            h3: Headings.H3,
            h4: Headings.H4,
            h5: Headings.H5,
            h6: Headings.H6,
            p: props => <p {...props} className={'my-4'} />,
            a: props => (
              // eslint-disable-next-line
              <a className={'underline hover:no-underline'} {...props} />
            ),
            pre: ({ children }) => (
              <div className={'overflow-x-auto'}>{children}</div>
            ),
            code: CodeBlock,
          }}
        >
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </div>
      <nav>
        <div className={'flex justify-between'}>
          <div>
            {prev && (
              <Link to={prev.frontmatter.path}>« {prev.frontmatter.title}</Link>
            )}
          </div>
          <div>
            {next && (
              <Link to={next.frontmatter.path}>{next.frontmatter.title} »</Link>
            )}
          </div>
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
