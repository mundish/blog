const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/blogPost.js")

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark(
              sort: { order: ASC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        posts = result.data.allMarkdownRemark.edges

        posts.forEach(({ node }, idx) => {
          const path = node.frontmatter.path
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              prev: idx === 0 ? null : posts[idx - 1].node,
              next: idx === posts.length - 1 ? null : posts[idx + 1].node,
            },
          })
          resolve()
        })
      })
    )
  })
}
