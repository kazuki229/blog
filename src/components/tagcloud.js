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
                margin: `20px`,
            }}
        >
            <h3
                style={{
                    width: `100%`,
                }}
            >
                タグ
            </h3>
            {data.allMarkdownRemark.group.map(tag =>
                <div
                    style={{
                        alignItems: `center`,
                        display: `flex`,
                        flexWrap: `wrap`,
                        justifyContent: `flex-start`,
                        padding: `0 4px 0 0`,
                    }}
                    key={tag.fieldValue}
                >
                    <a
                        href={`/tags/${kebabCase(tag.fieldValue)}/`}
                        style={{
                            padding: "5px 0px",
                            boxShadow: "none",
                            textDecoration: "none",
                        }}
                    >
                        <span
                            style={{
                                background: "#8be9fd",
                                color: "#44475a",
                                padding: "5px 10px",
                                borderRadius: "5px 0 0 5px",
                            }}
                        >
                            {tag.fieldValue}
                        </span>
                        <span
                            style={{
                                background: "#44475a",
                                padding: "5px 10px",
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
