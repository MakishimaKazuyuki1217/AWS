// 型のために導入
import { GetStaticProps, NextPage, NextPageContext } from 'next'
// Next.jsの組み込みコンポーネント
import Head from 'next/head'
import { isPropertySignature } from 'typescript'

// ページコンポーネントのpropsの型宣言
type SSGProps = {
    message: string
}

// SSGはgetStaticPropsがかえしたprops受け取ることができる
// NextPage<SSGProps>message: stringのみを受け取って生成されるページの型
const SSG: NextPage<SSGProps> = (props) => {
    const { message } = props

    return (
        <div>
            {   /* Headコンポーネントで包むと、その要素は<head>タグに配置されます　*/   }
            <head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico"/>
            </head>
            <main>
            <p>
                このページは静的サイト生成によってビルド時に生成されたページです
            </p>
            </main>
        </div>
    )
}


// getStaticPropsはビルド時に実行される
// GetStaticProps<SSGProps>はSSGPropsを引数にとるgetStaticPropsの型
export const getStaticProps: GetStaticProps<SSGProps> = async(context) => {
    const timestamp = new Date().toLocaleString();
    const message =  `${timestamp} にgetStaticPropsが実行されました`
    console.log("----------------------------------------------")
    console.log(message)

    return {
        // ここで返したpropsを元にページコンポーネントを描画する
        props: {
            message,
        },
    }
}

export default SSG
