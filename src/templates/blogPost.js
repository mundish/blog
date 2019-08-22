import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const Template = ({ data: { markdownRemark }, pageContext }) => {
  const {
    html,
    frontmatter: { title },
  } = markdownRemark
  const { prev, next } = pageContext

  return (
    <Layout>
      <h1>{title}</h1>
      <div className={"blogpost"} dangerouslySetInnerHTML={{ __html: html }} />
      {next && <Link to={next.frontmatter.path}>Next</Link>}
      {prev && <Link to={prev.frontmatter.path}>Previous</Link>}
      <Link to="/">Back to start</Link>
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template
