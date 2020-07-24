import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import "./layout.css"
import IconComponent from "../components/icon"
import Sidebar from "../components/sidebar"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>
        <div
          style={{
            display: `flex`,
            justifyContent: `space-between`,
          }}
        >
          <div
            className="main-posts">
            {children}
          </div>
          <Sidebar></Sidebar>
        </div>
      </main>
      <footer>
        <center>
          <a href="./privacy-policy">プライバシーポリシー</a><br></br>
          © {new Date().getFullYear()} kazuki229, Built with
        {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </center>
      </footer>
    </div>
  )
}

export default Layout
