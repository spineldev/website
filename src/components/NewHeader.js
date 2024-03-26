import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "headbg.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 998)
        }
      }
    }
  `)
  const imageData = data.bg.childImageSharp.gatsbyImageData
  return (
    <header className="header header--new" style={{ display: "grid" }}>
      <GatsbyImage
        style={{
          gridArea: "1/1",
        }}
        image={imageData}
        loading="eager"
        alt=""
      />
      <div
        className="header__content"
        style={{
          gridArea: "1/1",
          position: "relative",
        }}
      >
        <h1
          dangerouslySetInnerHTML={{ __html: siteTitle.replace("|", "<br/>") }}
        />
      </div>
    </header>
  )
}

export default Header
