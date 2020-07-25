import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import kebabCase from "lodash/kebabCase"

const TagCloud = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }    
    `);

    return (
        <div
            style={{
                display: `flex`,
                flexWrap: `wrap`,
                marginBottom: rhythm(2.5),
            }}
        >
            {data.allMarkdownRemark.group.map(tag =>
                <div
                    style={{
                        alignItems: `center`,
                        display: `fles`,
                        flexWrap: `wrap`,
                        justifyContent: `flex-start`,
                        padding: `10px`,
                    }}
                >
                    <a
                        href={`/tags/${kebabCase(tag.fieldValue)}/`}
                        style={{
                            padding: "10px 0px",
                            boxShadow: "none",
                        }}
                    >
                        <span
                            style={{
                                background: "#8be9fd",
                                color: "#44475a",
                                padding: "10px",
                                borderRadius: "5px 0 0 5px",
                            }}
                        >
                            {tag.fieldValue}
                        </span>
                        <span
                            style={{
                                background: "#44475a",
                                padding: "10px",
                                borderRadius: "0 5px 5px 0",
                                color: "#f8f8f2",
                            }}
                        >
                            {tag.totalCount}
                        </span>
                    </a>
                </div>
            )}
        </div>
    )
}

export default TagCloud
