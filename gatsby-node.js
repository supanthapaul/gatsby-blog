const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    
    // check if the node is markdown
    if(node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, '.md');
        
        // add the slug to the node field to get access via graphql
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
  }

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // get path to template
    const blogTemplate = path.resolve('./src/templates/asset.js')
    // get markdown data
    const res = await graphql(`
    query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    // create pages
    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/assets/${edge.node.fields.slug}`,
            // pass extra data to each page
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}