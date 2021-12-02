const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js');
    const servicePage = path.resolve('./src/templates/service-page.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }

            allContentfulServicePage {
              edges {
                node {
                  title
                  slug
                  overviewText {
                    childMarkdownRemark {
                      html
                    }
                  }
                  featuredImage {
                    file {
                      url
                    }
                  }
                  includedServices
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach(post => {
          createPage({
            path: `/insights/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })

        const pages = result.data.allContentfulServicePage.edges
        pages.forEach(page => {
          createPage({
            path: `/services/${page.node.slug}`,
            component: servicePage,
            context: {
              slug: page.node.slug,
              title: page.node.title
            },
          })
        })
      })
    )
  })
}