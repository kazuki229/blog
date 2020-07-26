import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import "./layout.css"
import Sidebar from "../components/sidebar"
import logo from "../../content/assets/titlelogo.svg"

const Layout = ({ location, children }) => {
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
          <img src={logo} alt="kazuki229's Blog" />
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
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
          <img src={logo} alt="kazuki229's Blog" />
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: "960px",
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>
        <div
          className="contents"
          style={{
            justifyContent: `space-between`,
          }}
        >
          <div
            className="main-posts"
          >
            {children}
          </div>
          <Sidebar></Sidebar>
        </div>
      </main>
      <footer>
        <center>
          <Link to="/privacy-policy">プライバシーポリシー</Link><br></br>
          © {new Date().getFullYear()} kazuki229, Built with
        {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </center>
      </footer>
    </div>
  )
}

export default Layout
