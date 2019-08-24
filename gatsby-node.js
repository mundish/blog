const path = require('path');

const createTagPages = (createPage, posts) => {
  const allTagsIndexTemplate = path.resolve('src/templates/allTagsIndex.js');
  const singleTagIndexTemplate = path.resolve(
    'src/templates/singleTagIndex.js'
  );

  const postsByTag = posts.reduce((acc, post) => {
    const { tags } = post.node.frontmatter;

    tags.forEach(tag => {
      if (tag) {
        acc[tag] = acc[tag] ? [...acc[tag], post.node] : [post.node];
      } else {
        acc.untagged = acc.untagged
          ? [...acc.untagged, post.node]
          : [post.node];
      }
    });
    return acc;
  }, {});

  const tags = Object.keys(postsByTag);

  createPage({
    path: '/tags',
    component: allTagsIndexTemplate,
    context: {
      tags: tags.sort(),
    },
  });

  tags.forEach(tag => {
    const posts = postsByTag[tag];

    createPage({
      path: `/tags/${tag}`,
      component: singleTagIndexTemplate,
      context: {
        posts,
        tag,
      },
    });
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blogPost.js');

    resolve(
      graphql(
        `
          query {
            allMdx(sort: { order: ASC, fields: [frontmatter___date] }) {
              edges {
                node {
                  frontmatter {
                    path
                    title
                    date
                    tags
                    excerpt
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        posts = result.data.allMdx.edges;

        createTagPages(createPage, posts);

        posts.forEach(({ node }, idx) => {
          const path = node.frontmatter.path;
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              prev: idx === 0 ? null : posts[idx - 1].node,
              next: idx === posts.length - 1 ? null : posts[idx + 1].node,
            },
          });
          resolve();
        });
      })
    );
  });
};
