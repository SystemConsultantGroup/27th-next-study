import NavigationBar from "components/common/NavigationBar";
import Head from "next/head";

export default function Article() {
  return (
    <>
      <Head></Head>
      <NavigationBar>
        <ArticleContent />
      </NavigationBar>
    </>
  );
}

function ArticleContent() {
  return <div>Hello world!</div>;
}
