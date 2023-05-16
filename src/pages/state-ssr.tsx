import { GetServerSideProps } from "next";
import { stateRef } from "./api/state";

export default function State({ text }: { text: string }) {
  return <main>{text}</main>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  console.log("ssr", process.pid);
  const text = JSON.stringify(stateRef.ref);
  return { props: { text } };
};
