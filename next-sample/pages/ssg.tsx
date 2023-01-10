import { GetStaticProps, NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import { isPropertySignature } from 'typescript';
import { isContext } from 'vm';

// ページコンポーネントのpropsの型定義
type SSGProps = {
    message: string;
};

// SSGはgetStaticPropsが返したpropsを受け取ることができる
// NextPage<SSGProps>はmessage: stringのみを受け取って生成されるページの型
// Next.jsのページコンポーネントや関数の型は https://nextjs.org/learn/excel/typescript/nextjs-types もご参照ください
const SSG: NextPage<SSGProps> = (props) => {
    const {message} = props;

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
                <p>{message}</p>
            </main>
        </div>
  );
};


export const getStaticProps: GetStaticProps<SSGProps> = async(context) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp} にgetStaticPropsが実行されました`

    console.log(message)

    return {
        props: {
            message,
        }
    }
}

export default SSG;