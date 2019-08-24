import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import StartLink from '../components/StartLink';
import Preview from '../components/Preview';

const SingleTagTemplate = ({ pageContext }) => {
  const { posts, tag } = pageContext;
  return (
    <Layout>
      <div className={'mb-4'}>
        <h1 className={'text-center text-2xl mb-4'}>Posts tagged with {tag}</h1>
        <ul>
          {posts.map((post, idx) => {
            const { title, date, excerpt, path } = post.frontmatter;

            return (
              <Preview
                key={idx}
                title={title}
                date={date}
                excerpt={excerpt}
                path={path}
              />
            );
          })}
        </ul>
      </div>
      <div className={'text-center p-4'}>
        <Link className={'underline hover:no-underline'} to={'/tags'}>
          Browse all tags
        </Link>
      </div>
      <StartLink />
    </Layout>
  );
};

export default SingleTagTemplate;
