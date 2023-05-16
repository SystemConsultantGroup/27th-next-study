import { useRouter } from "next/router";

export default function Query() {
  const router = useRouter();
  const t = JSON.stringify(router.query);
  console.log(router.isReady, t);
  return <main>
    {t}
  </main>;
}
