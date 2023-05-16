import { NextComponentType } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";

interface CustomAppProps extends AppProps {
  Component: NextComponentType & { route?: { name: string } };
}

export default function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <>
      <Head>
        {/* 이건 _app.js에 넣어도 되지만 이런게 가능하다는 걸 보여주기 위해서 */}
        <title>{Component.route?.name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#3147F5" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
