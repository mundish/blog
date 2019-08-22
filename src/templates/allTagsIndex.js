import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AllTagsTemplate = ({ pageContext }) => {
  const { tags } = pageContext
  return (
    <Layout>
      <div>
        <ul>
          {tags.map((tag, idx) => {
            return (
              <li key={idx}>
                <Link to={`/tags/${tag}`}>{tag}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <Link to="/">Back to start</Link>
    </Layout>
  )
}

export default AllTagsTemplate
