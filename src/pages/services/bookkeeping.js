import React, { Component } from 'react'
import Layout from '../../components/layout'
import { Helmet } from 'react-helmet'
import Hero from '../../components/hero'
import favicon from '../../images/favicon.png'

export default class Bookkeeping extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Helmet>
                        <title>Bookkeeping Oversight | JB Tax & Accounting</title>
                        <meta name="description" content="Helmet application" />
                        <link rel="icon" href={favicon} />
                    </Helmet>
                    <Hero />
                    <section>
                        <div className="container">

                        </div>
                    </section>
                </Layout> 
            </div>
        )
    }
}
