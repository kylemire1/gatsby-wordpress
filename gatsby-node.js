/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/templates/page-template.js`)

  return graphql(
    `
      query loadPagesQuery {
        wordpress {
          pages {
            nodes {
              pageContent {
                layout {
                  ... on WordPress_Page_Pagecontent_Layout_Hero {
                    fieldGroupName
                    heroText
                  }
                  ... on WordPress_Page_Pagecontent_Layout_ContentBlock {
                    fieldGroupName
                    blockContent
                    blockTitle
                  }
                }
              }
              title
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.wordpress.pages.nodes.forEach(node => {
      let path = `/${node.slug}`
      if (path === "/home") path = "/"

      createPage({
        path,
        component: pageTemplate,
        context: {
          layout: node.pageContent.layout,
          title: node.title,
        },
      })
    })
  })
}
