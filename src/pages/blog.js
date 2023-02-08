import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/Header"
import ImportantInfoBlock from "../components/ImportantInfoBlock"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const Head = () => <title>Blog | Spinel Hydraulika-Pneumatyka</title>

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
      <Header siteTitle="Blog firmowy" isFrontPage={false} />
      <ImportantInfoBlock />
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </Layout>
  )
}

const Blog = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allWpPost(sort: { date: DESC }, filter: { status: { eq: "publish" } }) {
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
  `)
  return <BlogLayout posts={data.allWpPost.nodes} {...props} />
}

export default Blog
