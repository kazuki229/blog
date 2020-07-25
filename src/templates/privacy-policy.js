import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
const PrivacyPolicy = () => {
    return (
        <Layout location="privacy-policy" title="プライバシーポリシー">
            <SEO title="プライバシーポリシー" />
            <div>
                <h1>プライバシーポリシー</h1>
                <h2>当サイトが使用しているアクセス解析ツールについて</h2>
                <p>当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。</p>
                <p>このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。</p>
                <p>このトラフィックデータは匿名で収集されており、個人を特定するものではありません。</p>
                <p>この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。</p>
                <p>この規約に関して、詳しくは<a href="https://marketingplatform.google.com/about/analytics/terms/jp/">こちら</a>、または<a href="https://policies.google.com/technologies/partner-sites?hl=ja">こちら</a>をクリックしてください。</p>
            </div>
        </Layout >
    )
}

export default PrivacyPolicy
