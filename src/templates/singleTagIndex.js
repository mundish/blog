import React from "react"
import { graphql, Link } from "gatsby"

const SingleTagTemplate = ({ data, pageContext }) => {
  const { posts, tag } = pageContext
  return (
    <div>
      <div>Posts tagged with {tag}</div>
      <div>
        <ul>
          {posts.map((post, idx) => {
            return (
              <li key={idx}>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default SingleTagTemplate
