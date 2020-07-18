import React from "react"
import PropTypes from "prop-types"

// Components
const PrivacyPolicy = ({ pageContext, data }) => {
    return (
        <div>
            <h1>プライバシーポリシー</h1>
            <h2>当サイトが使用しているアクセス解析ツールについて</h2>
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
            このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
            このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
            この規約に関して、詳しくは<a href="https://marketingplatform.google.com/about/analytics/terms/jp/">こちら</a>、または<a href="https://policies.google.com/technologies/partner-sites?hl=ja">こちら</a>をクリックしてください。
        </div>
    )
}

PrivacyPolicy.propTypes = {
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
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

export default PrivacyPolicy
