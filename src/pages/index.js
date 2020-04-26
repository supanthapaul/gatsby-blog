import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello, I'm Supantha Paul!</h1>
            <h2>I'm a Unity game developer and aspiring 3D artist</h2>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage;