import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShortPost from "../components/shortpost"

const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext
    const edges = data.allMarkdownRemark.edges
    console.log(edges)

    return (
        <Layout location={tag}>
            <SEO title="All posts" />
            <h2>{tag}に関連する記事一覧</h2>
            {edges.map(({ node }) => {
                return (<ShortPost
                    slug={node.fields.slug}
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    description={node.frontmatter.description}
                    tags={node.frontmatter.tags}
                    key={node.fields.slug}
                />)
            })}
        </Layout >
    )
}

Tags.propTypes = {
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
                            date: PropTypes.string.isRequired,
                            description: PropTypes.string.isRequired,
                            tags: PropTypes.arrayOf(
                                PropTypes.string.isRequired
                            ).isRequired
                        }),
                        fields: PropTypes.shape({
                            slug: PropTypes.string.isRequired,
                        }),
                    }),
                }).isRequired
            ),
        }),
    }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            tags
          }
        }
      }
    }
  }
`
