import React from 'react'
import {Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'


const AssetsPage = () => {
    // GraphQL query
    const assetsData = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title,
                date
              },
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    // building assets list
    const assetList = assetsData.allMarkdownRemark.edges.map(edge => (
    <li key={edge.node.frontmatter.title}>
        <Link to={`/assets/${edge.node.fields.slug}`}>
          <h1>
              {edge.node.frontmatter.title}
          </h1>
          <p>{edge.node.frontmatter.date}</p>
        </Link>
    </li>))
    return (
        <Layout>
            <h1>Assets</h1>
            <ul>
                {assetList}
            </ul>
        </Layout>
    )
}

export default AssetsPage;