import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

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
    <BackgroundImage
      Tag="header"
      className={`header${isFrontPage ? " header--home-page" : ""}`}
      fluid={imageData}
    >
      <h1 dangerouslySetInnerHTML={{ __html: siteTitle.replace('|', '<br/>') }} />
      {isFrontPage && (
        <p>
          Jesteśmy polską firmą rodzinną, działamy nieprzerwanie od 1988 roku.
          &nbsp;<br />
          Zajmujemy się kompleksowo hydrauliką siłową i pneumatyką.
        </p>
      )}
    </BackgroundImage>
  )
}

export default Header
