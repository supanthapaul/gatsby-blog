import React from 'react'
import {Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const AssetsPage = () => {
    // GraphQL query
    const blogData = useStaticQuery(graphql`
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
    const postsList = blogData.allMarkdownRemark.edges.map(edge => (
    <li className={blogStyles.post} key={edge.node.frontmatter.title}>
        <Link to={`/blog/${edge.node.fields.slug}`}>
          <h1>
              {edge.node.frontmatter.title}
          </h1>
          <p>{edge.node.frontmatter.date}</p>
        </Link>
    </li>))
    return (
        <Layout>
          <Head title="Blog" />
            <h1>Blog</h1>
            <ul className={blogStyles.posts}>
                {postsList}
            </ul>
        </Layout>
    )
}

export default AssetsPage;
