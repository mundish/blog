import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const TitleAndDesc = ({ data }) => {
  const { title, description } = data.site.siteMetadata;
  return (
    <div className="mb-8">
      <Link to={'/'}>
        <h2 className="text-3xl text-center">{title}</h2>
      </Link>
      <p className="text-center">{description}</p>
    </div>
  );
};

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => <TitleAndDesc data={data} />}
  />
);

export default Header;
