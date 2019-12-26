import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleCard from "../components/articleCard"
import Bio from "../components/bio"
import styled from "styled-components"

const ArticleDivisor = styled.div`
  width: 100%;
  height: 1px;
  background: black;
`;

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        {posts.map(({ node }) => (
          <div style={{ margin: '24px 0' }}>
            <ArticleCard
              key={node.fields.slug}
              node={node}
            />
            <ArticleDivisor/>
          </div>
        ))}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
