import React from "react"
import { Link } from "gatsby"
import TagList from "../components/taglist"

const ShortPost = ({ slug, title, date, description, tags }) => {
    return (
        <article key={slug}>
            <header>
                <h3
                    style={{
                        marginTop: 0,

                    }}
                >
                    <Link style={{ boxShadow: `none` }} to={slug}>
                        {title}
                    </Link>
                </h3>
                <small>{date}</small>
                <TagList tags={tags} />
            </header>
            <section>
                <p
                    dangerouslySetInnerHTML={{
                        __html: description,
                    }}
                />
            </section>
        </article>
    )
}

export default ShortPost
