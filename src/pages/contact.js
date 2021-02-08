import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <p>Reach me through email @supapaul56@gmail.com</p>
            <p>Find me on <a href="https://twitter.com/supanthapaul" target="_blank">Twitter</a></p>
        </Layout>
    )
}

export default ContactPage;