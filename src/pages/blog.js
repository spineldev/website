import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/Header"
import ImportantInfoBlock from "../components/ImportantInfoBlock"
import { Helmet } from "react-helmet"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Post = ({ post }) => {
  const desktop = getImage(post.featuredImage?.node?.desktop)
  const mobile = getImage(post.featuredImage?.node?.mobile)
  const isBrowser = typeof window !== "undefined"
  return (
    <article className={`post${desktop ? " post--withImage" : ""}`}>
      {desktop && (!isBrowser || window.innerWidth) > 700 && (
        <GatsbyImage
          image={desktop}
          alt={post.featuredImage?.node?.altText || ``}
        />
      )}
      {mobile && isBrowser && window.innerWidth <= 700 && (
        <GatsbyImage
          image={mobile}
          alt={post.featuredImage?.node?.altText || ``}
        />
      )}
      <div className="post__content">
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
      </div>
    </article>
  )
}

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
            featuredImage {
              node {
                altText
                desktop: localFile {
                  childImageSharp {
                    gatsbyImageData(width: 232, height: 232)
                  }
                }
                mobile: localFile {
                  childImageSharp {
                    gatsbyImageData(width: 500, height: 150)
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => <BlogLayout posts={data.allWpPost.nodes} {...props} />}
  />
)

export default Blog
