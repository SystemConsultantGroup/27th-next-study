import Image from "next/image";
import landscape from "../../public/landscape.jpg";

export default function ComponentView() {
  return (
    <div>
      <header
        style={{
          height: "400px",
          textAlign: "center",
          position: "relative",
          overflow: "clip",
        }}
      >
        <Image
          src={landscape}
          alt=""
          fill={true}
          style={{
            width: "100%",
            position: "absolute",
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
        />
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            zIndex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ color: "white" }}>개쩌는 웹사이트</h1>
        </div>
      </header>
      <main style={{ padding: "16px 24px" }}>
        <h2>두둥탁</h2>
      </main>
    </div>
  );
}
