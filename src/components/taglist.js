import React from "react"
import kebabCase from "lodash/kebabCase"

const TagList = ({ tags }) => {
    return (
        <div
            style={{
                display: `flex`,
                flexWrap: `wrap`,
            }}
        >
            {tags.map(tag =>
                <div
                    style={{
                        background: "#f1fa8c",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        margin: "4px 4px 0 0",
                    }}
                    key={tag}
                >
                    <a
                        href={`/tags/${kebabCase(tag)}/`}
                        style={{
                            boxShadow: "none",
                            textDecoration: "none",
                            color: "#44475a",
                        }}
                    >
                        {tag}
                    </a>
                </div>
            )}
        </div>
    )
}

export default TagList
