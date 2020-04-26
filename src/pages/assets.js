import React from 'react'
import {graphql, useStaticQuery } from 'gatsby'

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
              }
            }
          }
        }
      }
    `)
    // building assets list
    const assetList = assetsData.allMarkdownRemark.edges.map(edge => (
    <li key={edge.node.frontmatter.title}>
        <h1>{edge.node.frontmatter.title}</h1>
        <p>{edge.node.frontmatter.date}</p>
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