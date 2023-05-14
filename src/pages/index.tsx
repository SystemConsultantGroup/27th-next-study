import NavigationBar from "components/common/NavigationBar";
import Link from "next/link";

export default function Home() {
  return (
    <NavigationBar>
      <HomeContent />
    </NavigationBar>
  );
}

function HomeContent() {
  return (
    <main>
      <h1>Hello world!</h1>
      <Link href="/article">게시글 보기</Link>
    </main>
  );
}
