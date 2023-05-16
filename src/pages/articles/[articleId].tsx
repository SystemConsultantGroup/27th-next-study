import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ArticleIdView() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  return (
    <>
      <p>
        Page: {router.pathname} / {router.asPath}
      </p>
      <p>Query: {JSON.stringify(router.query)}</p>
      <Link href="/articles/one">one</Link>
      <Link href="/articles/two">two</Link>
      <p>Counter: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Ho</button>
    </>
  );
}
