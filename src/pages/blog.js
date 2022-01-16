import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/Header"
import ImportantInfoBlock from "../components/ImportantInfoBlock"
import { Helmet } from "react-helmet"

const Post = ({ post }) => (
  <article className="post">
    <h2 className="special">
      <Link
        to={`/blog/${post.slug}`}
        dangerouslySetInnerHTML={{ __html: post.title }}
      />
    </h2>
    <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
    <Link to={`/blog/${post.slug}`} className="read-more">
      Czytaj dalej →
    </Link>
  </article>
)

const BlogLayout = ({ posts }) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog | Spinel Hydraulika-Pneumatyka</title>
      </Helmet>
      <Header siteTitle="Blog firmowy" isFrontPage={false} />
      <ImportantInfoBlock />
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </Layout>
  )
}

const Blog = (props) => (
  <StaticQuery
    query={graphql`
      query {
        allWpPost(
          sort: { fields: date, order: DESC }
          filter: { status: { eq: "publish" } }
        ) {
          nodes {
            id
            slug
            title
            excerpt
          }
        }
      }
    `}
    render={(data) => <BlogLayout posts={data.allWpPost.nodes} {...props} />}
  />
)

export default Blog
