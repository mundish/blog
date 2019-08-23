import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import StartLink from '../components/StartLink';

const AllTagsTemplate = ({ pageContext }) => {
  const { tags } = pageContext;
  return (
    <Layout>
      <div className={'text-center mb-4'}>
        <h1 className={'text-2xl mb-4'}>Tags</h1>
        <ul className={'font-serif'}>
          {tags.map((tag, idx) => {
            return (
              <li key={idx} className={'py-1'}>
                <Link
                  className={'underline hover:no-underline'}
                  to={`/tags/${tag}`}
                >
                  {tag}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <StartLink />
    </Layout>
  );
};

export default AllTagsTemplate;
