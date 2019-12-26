import React from "react"
import { rhythm } from "../utils/typography"
import BlogHeader from "./header"
import styled from "styled-components"
import "./layout.css"

const BlogContent = styled.div`
  margin: 80px auto;
  max-width: ${p => p.maxWidth};
  padding: ${p => p.padding};
  background: #666666;
  color: white;
`;

const Layout = ({ title, children }) => (
  <>
    <BlogHeader
      title={title}
    />
    <BlogContent
      maxWidth={rhythm(24)}
      padding={`${rhythm(1.5)} ${rhythm(3 / 4)}`}
    >
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </BlogContent>
  </>
)

export default Layout
