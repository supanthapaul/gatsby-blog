import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout>
            <Head title="404" />
            <h1>Page Not Found</h1>
            <p>Are you looking for the <Link to="/assets">Assets page?</Link></p>
        </Layout>
    )
}

export default NotFound;