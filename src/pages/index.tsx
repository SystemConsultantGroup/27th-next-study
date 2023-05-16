import NavigationBar from "components/common/NavigationBar";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <NavigationBar>
      <HomeContent />
    </NavigationBar>
  );
}

function HomeContent() {
  useEffect(() => {
    return () => console.log("unmount");
  });
  const [count, setCount] = useState(0);
  return (
    <main>
      <h1>Hello world!</h1>
      <Link href="/article">게시글 보기</Link>
      <p>Counter: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Ho</button>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
