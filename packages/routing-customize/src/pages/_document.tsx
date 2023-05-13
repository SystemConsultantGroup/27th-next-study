import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return <Html lang="en">
    <Head>
      <title>System Consultant Group</title>
      <meta name="description" content="성대 최고의 개발 단체, 시스템컨설턴트그룹" />
      <meta name="author" content="이현우" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#3147F5" />

      {/* 'open graph protocol' metadata */}
      <meta property="og:title" content="System Consultant Group" />
      {/* 'twitter card' metadata */}
      <meta property="twitter:title" content="System Consultant Group" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>;
}
