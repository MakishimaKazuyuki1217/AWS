// 型のために導入
import { NextPage } from 'next'
// Next.jsの組み込みコンポーネント
import Head from 'next/head'

// ページコンポーネントのpropsの型定義（ここでは空）
type SSGProps = {}

// SSG向けのページを実装
// NextPageはnext.jsのpages向けの方
// NestPage<props>でpropsが入るPageであることを明示
const SSG: NextPage<SSGProps> = () => {
    return (
        <div>
            {   /* Headコンポーネントで包むと、その要素は<head>タグに配置されます　*/   }
            <head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico"/>
            </head>
            <main>
            <p>
                このページは静的サイト生成に酔ってビルド時に生成されたページです
            </p>
            </main>
        </div>
    )
}

export default SSG
