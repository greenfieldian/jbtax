import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import ArticlePreview from '../components/articlePreview'
import Hero from '../components/hero'
import CalltoAction from '../components/callToAction'
import NewsletterSignup from '../components/newsletterSignup'

class Insights extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout>
        <Hero title="Company Insights"/>
        <div style={{ background: '#fff' }} className="container">
          <div className="">
            {/*<h2 className="section-headline">Recent articles</h2>*/}
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug} className="blog-item">
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <CalltoAction />
        <NewsletterSignup />
      </Layout>
    )
  }
}

export default Insights

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost {
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
  }
`