import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/NewHeader"
import ImportantInfoBlock from "../components/ImportantInfoBlock"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const Head = () => (
  <title>Baza wiedzy | Spinel Hydraulika-Pneumatyka</title>
)

const Post = ({ post }) => {
  const image = getImage(post.featuredImage?.node?.localFile)
  return (
    <article className={`post${image ? " post--withImage" : ""}`}>
      <div className="post__image">
        <Link to={`/blog/${post.slug}`}>
          {image && (
            <GatsbyImage
              image={image}
              alt={post.featuredImage?.node?.altText || ``}
            />
          )}
        </Link>
      </div>
      <div className="post__content">
        <h2 className="special">
          <Link
            to={`/blog/${post.slug}`}
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
        </h2>
      </div>
    </article>
  )
}

const BlogLayout = ({ posts }) => {
  return (
    <Layout>
      <Header siteTitle="Baza wiedzy" isFrontPage={false} />
      <ImportantInfoBlock />
      <div className="articles">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
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
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 80, height: 80)
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
