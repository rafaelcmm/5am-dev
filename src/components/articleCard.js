import { rhythm } from "../utils/typography"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Article = styled.article`
  padding: 12px;
  
  &:hover {
    background: #BBBBBB;
  }
`

const ArticleTitle = styled.h3`
  margin-top: 12px;
  margin-bottom: 0;
  color: black;
`

const ArticleDate = styled.small`
  margin-bottom: ${rhythm(1 / 4)};
  font-weight: normal;
`

const ArticleDescription = styled.p`
  font-weight: normal;
  margin: 12px 0;
`

const ArticleCard = ({ node }) => (
  <Link style={{ boxShadow: `none`, color: 'black' }} to={node.fields.slug}>
    <Article>
      <header>
        <ArticleTitle>
          { node.frontmatter.title || node.fields.slug }
        </ArticleTitle>
        <ArticleDate>{node.frontmatter.date}</ArticleDate>
      </header>
      <section>
        <ArticleDescription
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </section>
    </Article>
  </Link>
);

export default ArticleCard;