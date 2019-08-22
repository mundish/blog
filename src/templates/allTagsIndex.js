import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const AllTagsTemplate = ({ pageContext }) => {
  const { tags } = pageContext;
  return (
    <Layout>
      <div className={"text-center mb-4"}>
        <h1 className={"text-2xl mb-4"}>Tags</h1>
        <ul>
          {tags.map((tag, idx) => {
            return (
              <li key={idx} className={"py-1"}>
                <Link to={`/tags/${tag}`}>{tag}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Link to="/">Back to start</Link>
    </Layout>
  );
};

export default AllTagsTemplate;
