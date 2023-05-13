import NavigationBar from "components/common/NavigationBar";

export default function Home() {
  return (
    <NavigationBar>
      <HomeContent />
    </NavigationBar>
  );
}

function HomeContent() {
  return <div>Hello world!</div>;
}
