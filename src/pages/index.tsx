// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ShortPost from "../components/shortpost"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
          tags: string[]
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location}>
      <SEO title="kazuki229's Blog" />
      {posts.map(({ node }) => {
        return (
          <ShortPost
            slug={node.fields.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            description={node.frontmatter.description}
            tags={node.frontmatter.tags}
            key={node.fields.slug}
          />)
      })}
    </Layout>
  )
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
            tags
          }
        }
      }
    }
  }
`
