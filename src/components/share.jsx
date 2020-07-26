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
            <div
                className="fb-share-button"
                data-href=
                "https://kazuki229.github.io/blog"
                data-layout="button_count"
                data-size="small"
            >
                <a
                    target="_blank"
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkazuki229.github.io%2Fblog&amp;src=sdkpreparse"
                    className="fb-xfbml-parse-ignore"
                >
                    シェア
                </a>
            </div>
            <Helmet>
                <div id="fb-root"></div>
                <script
                    async="async"
                    defer="defer"
                    crossorigin="anonymous"
                    src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&autoLogAppEvents=1&version=v7.0"
                    nonce="WJmnSGmS">
                </script>
            </Helmet>
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
