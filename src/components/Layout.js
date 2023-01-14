import React from "react"
import { Link } from "gatsby"
import "reset-css"
import "./layout.scss"
import TopBar from "./TopBar"
import AuthorizedService from "./AuthorizedService"

const Layout = ({ children, isFrontPage }) => {
  return (
    <div className={`container page${isFrontPage ? " frontPage" : ""}`}>
      <TopBar isFrontPage={isFrontPage} />
      {children}
      <AuthorizedService />
      <footer className="footer">
        Copyright © {new Date().getFullYear()}{" "}
        <Link to="/">Spinel Hydraulika-Pneumatyka</Link>. Wszelkie prawa
        zastrzeżone. | <Link to="/dane-osobowe">RODO</Link>
      </footer>
    </div>
  )
}

export default Layout
