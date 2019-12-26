import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.div`
  top: 0;
  position: absolute;
  width: 100%;
  background: #333333;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BlogTitle = styled.h3`
  font-family: Montserrat, sans-serif;
  margin: 0;
  color: white;
`;

const LinkToRoot = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const BlogHeader = ({ title }) => (
  <HeaderContainer>
    <BlogTitle>
      <LinkToRoot to={`/`}>
        {title}
      </LinkToRoot>
    </BlogTitle>
  </HeaderContainer>
)

export default BlogHeader;