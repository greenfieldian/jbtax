import React from 'react'
import { Link } from 'gatsby'



export default ({ article }) => (
  <article className=" ">
      <div>
        <Link to={`/insights/${article.slug}`}>
          <img src={article.featuredImage.file.url} className="w-100"/>
        </Link>
      </div>
      <div className="meta-text">
          <h4>
            <Link to={`/insights/${article.slug}`}>{article.title}</Link>
          </h4>
          <div className="article-snippet">{article.snippet.snippet}</div>
      </div>
  </article>
)