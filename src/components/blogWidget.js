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
    <div className='bite-size-widget widget-container tb-padding'>
      <div className="text-center">
        <h3>Recent Insights</h3>
      </div>
      <div className="d-flex flex-wrap justify-content-between">
      {data.allContentfulBlogPost.edges.map(( {node} ) => {
        return (
          <ArticlePreview article={node} />
          )
        })}
      </div>
    </div>

  )
}