import React from "react"
import { StaticQuery, graphql } from "gatsby"

const TitleAndDesc = ({ data }) => {
  const { title, description } = data.site.siteMetadata
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

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
)

export default Header;