import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ArticlePreview from './articlePreview'



export default function BlogWidget() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulBlogPost(limit: 3) {
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
  `)

  return (
    <div className='bite-size-widget widget-container tb-padding container'>
      <div className="row">
        <h3 className="header-center text-center color-blue">Recent Insights</h3>
      </div>
      <div className="row">
      {data.allContentfulBlogPost.edges.map(( {node} ) => {
        return (
          <div className="col-sm-12 col-md-6 col-lg-4">
              <ArticlePreview article={node} />
          </div>
          )
        })}
      </div>
    </div>

  )
}