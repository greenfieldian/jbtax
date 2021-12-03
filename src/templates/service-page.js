import React, { Component } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import favicon from '../images/favicon.png'
import NewsletterSignup from '../components/newsletterSignup'
import Form from '../components/form'
import ArticlePreview from '../components/articlePreview'
import form1 from "../images/form-img-1.jpeg"
import form2 from "../images/form-img-2.jpeg"
import form3 from "../images/form-img-3.jpeg"
import form4 from "../images/form-img-4.jpeg"

class ServicePageTemplate extends Component {
    render() {
        const posts = get(this, 'props.data.allContentfulBlogPost.edges')
        const pages = get(this.props, 'data.contentfulServicePage')

        return (
            <div>
                <Layout>
                    <Helmet>
                        <title> {pages.title} | JB Tax & Accounting</title>
                        <meta name="description" content="Helmet application" />
                        <link rel="icon" href={favicon} />
                    </Helmet>
                    <Hero title={pages.title}/>
                    <section className="service-page-container">
                        <div className="">
                            <div className="">
                                <div className="container">
                                    <div className="row">
                                        <h2 className="header color-blue">Overview</h2>
                                        <p>
                                            <div
                                            dangerouslySetInnerHTML={{__html: pages.overviewText.childMarkdownRemark.html}}
                                            />
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-light-grey up tb-padding">
                                    <div className="container">
                                        <div className="row">
                                            <h3 className="color-blue mb-4">Payroll services include:</h3>
                                            <ul className="d-flex flex-wrap service-item-list">
                                                {pages.includedServices.map(( children ) => {
                                                    return (
                                                    <li className="service-item">
                                                        {children}
                                                    </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="featured-slider tb-padding">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col text-center">
                                                <h2 className="header-center color-blue mb-4">Related Articles</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div style={{ background: '#fff' }} className="row">
                                            <div className="">
                                                {/*<h2 className="section-headline">Recent articles</h2>*/}
                                                <ul className="article-list row">
                                                {posts.map(({ node }) => {
                                                    return (
                                                    <li key={node.slug} className="blog-item col-sm-12 col-md-6 col-lg-4">
                                                        <ArticlePreview article={node} />
                                                    </li>
                                                    )
                                                })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-light-grey tb-padding">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col text-center mb-4">
                                                <h3 className="color-blue text-center">Let's Start a Conversation</h3>
                                                <p className="color-blue">Our team is available to help! Contact us and we will reach out to assist you.</p>
                                            </div>
                                            <div className="d-flex flex-wrap service-form-container">
                                                <div className="d-flex justify-content-between flex-wrap mb-3 service-form-item">
                                                    <img src={form1} className="service-form-image mb-3 rounded"/>
                                                    <img src={form2} className="service-form-image mb-3 rounded"/>
                                                    <img src={form3} className="service-form-image mb-3 rounded"/>
                                                    <img src={form4} className="service-form-image mb-3 rounded"/>
                                                </div>
                                                <div className="service-form-item">
                                                    <Form />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <NewsletterSignup/>
                </Layout> 
            </div>
        )
    }
}

export default ServicePageTemplate

export const pageQuery = graphql`
  query servicesBlogQueryAndServiceQuery($title: String, $slug: String!) {
    allContentfulBlogPost(filter: {category: {title: {eq: $title}}}) {
      edges {
        node {
          title
          slug
          snippet {
            snippet
          }
          featuredImage {
            file {
              url
            }
          }
        }
      }
    }

    contentfulServicePage(slug: { eq: $slug }) {
        title
        includedServices
        overviewText {
          childMarkdownRemark {
            html
          }
        }
    }
  }
`;