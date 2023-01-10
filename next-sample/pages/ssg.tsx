import { NextPage } from 'next'
import Head from 'next/head'

// ページコンポーネントのpropsの型定義
type SSGProps = {};

// SSGはgetStaticPropsが返したpropsを受け取ることができる
// NextPage<SSGProps>はmessage: stringのみを受け取って生成されるページの型
// Next.jsのページコンポーネントや関数の型は https://nextjs.org/learn/excel/typescript/nextjs-types もご参照ください
const SSG: NextPage<SSGProps> = () => {
    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="favicon.icon" />
            </Head>

            <main>
                <p>
                    このページは静的サイト生成によってビルド時に生成されたページです
                </p>
            </main>
        </div>
  );
};

export default SSG;