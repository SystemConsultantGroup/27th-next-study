import type { AppProps } from "next/app";

interface CustomAppProps extends AppProps {
  name?: string;
}

export default function MyApp({ Component, pageProps }: CustomAppProps) {
  return <Component {...pageProps} />;
}
