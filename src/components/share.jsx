import React from 'react';
import { Helmet } from "react-helmet"

const Share = () => {
    return (
        <div className="post-social">
            <a
                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                className="twitter-share-button"
                data-show-count="true"
            ></a>
            <iframe
                src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fkazuki229.github.io%2Fblog%2Ftags%2Fauthentication%2F&width=91&layout=button_count&action=like&size=small&share=false&height=20"
                width="91"
                height="20"
                style={{
                    border: `none`,
                    overflow: `hidden`,
                    margin: `0 4px`,
                }}
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media">
            </iframe>
            <a
                href="https://b.hatena.ne.jp/entry/"
                className="hatena-bookmark-button share-button"
                data-hatena-bookmark-layout="basic-label-counter"
                data-hatena-bookmark-lang="ja"
                title="このエントリーをはてなブックマークに追加"
            >
                <img
                    src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
                    alt="このエントリーをはてなブックマークに追加"
                    width="20"
                    height="20"
                    style={{
                        border: `none`,
                    }}
                />
            </a>
            <Helmet>
                <script
                    async="async"
                    src="https://b.st-hatena.com/js/bookmark_button.js"
                    charSet="utf-8"
                >
                </script>
            </Helmet>
        </div>
    )
};

export default Share;
