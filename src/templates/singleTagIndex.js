import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import StartLink from '../components/StartLink';

const SingleTagTemplate = ({ pageContext }) => {
  const { posts, tag } = pageContext;
  return (
    <Layout>
      <div className={'text-center mb-4'}>
        <h1 className={'text-2xl mb-4'}>Posts tagged with {tag}</h1>
        <ul>
          {posts.map((post, idx) => {
            return (
              <li key={idx}>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <StartLink />
    </Layout>
  );
};

export default SingleTagTemplate;
