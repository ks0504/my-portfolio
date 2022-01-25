import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html lang="ja-JP" className='scroll-smooth'>
      <Head>
        <meta name="application-name" content="MyApp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;