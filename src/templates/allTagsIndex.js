import React from "react"
import { Link } from "gatsby"

const AllTagsTemplate = ({ pageContext }) => {
  const { tags } = pageContext
  return (
    <div>
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
      <Link to='/'>Back to start</Link>
    </div>
  )
}

export default AllTagsTemplate
