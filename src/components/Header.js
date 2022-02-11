import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Header = ({ siteTitle, isFrontPage }) => {
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
    <header
      className={`header${isFrontPage ? " header--home-page" : ""}`}
      style={{ display: "grid" }}
    >
      <GatsbyImage
        style={{
          gridArea: "1/1",
        }}
        image={imageData}
        loading="eager"
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
        {isFrontPage && (
          <p>
            Jesteśmy polską firmą rodzinną, działamy nieprzerwanie od 1988 roku.
            &nbsp;
            <br />
            Zajmujemy się kompleksowo hydrauliką siłową i pneumatyką.
          </p>
        )}
      </div>
    </header>
  )
}

export default Header
