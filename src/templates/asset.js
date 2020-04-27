import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

// exporting the query will make gatsby run it
// and the data will be available as props
export const query = graphql `
query(
    $slug: String!
  ) {
    markdownRemark(
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title,
        date
      },
      html
    }
  }
`

const AssetPage = (props) => {
    return (
        <Layout>
            <h2>{props.data.markdownRemark.frontmatter.title}</h2>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}>    
            </div>
        </Layout>
    )
}

export default AssetPage;