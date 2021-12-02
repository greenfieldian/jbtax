import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import CalltoAction from '../components/callToAction'
import NewsletterSignup from '../components/newsletterSignup'
import { renderRichText } from 'gatsby-source-contentful/rich-text'


class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')

    return (
      <Layout>
        <div style={{ background: '#fff' }} className="blog-post-container">
          <div className="container">
            <h1 className='blog-post-headline'>{post.title}</h1>
            <div className="blog-post-meta">
            </div>
            <hr></hr>
          </div>
        </div>
        <CalltoAction />
        <NewsletterSignup />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      postBody {
        raw
      }
    }
  }
`;
