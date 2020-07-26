/**
 * Sidebar component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import TagCloud from "../components/tagcloud"

const Sidebar = () => {
    return (
        <aside style={{
            width: "360px",
            minWidth: "360px",
        }}
        >
            <TagCloud></TagCloud>
            <div
                style={{
                    textAlign: `center`,
                }}
            >
                <a
                    className="twitter-timeline"
                    data-width="300"
                    data-height="800"
                    data-theme="dark"
                    data-chrome="transparent"
                    border-color="#f8f8f2"
                    href="https://twitter.com/kazuki229_dev?ref_src=twsrc%5Etfw"
                >
                    Tweets by kazuki229_dev
            </a>
            </div>
        </aside>
    )
}

export default Sidebar
