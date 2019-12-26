import React from "react"

import { rhythm } from "../utils/typography"
import BlogHeader from "./header"

const Layout = ({ title, children }) => (
  <>
    <BlogHeader
      title={title}
    />
    <div
      style={{
        margin: `80px auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  </>
)

export default Layout
