import Image from "next/image";
import landscape from "../../public/landscape.jpg";

export default function ComponentView() {
  return (
    <div>
      <header
        style={{
          padding: "32px 32px",
          height: "128px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <Image
          src={landscape}
          alt=""
          style={{ objectFit: "cover", objectPosition: "50% 50%" }}
        />
        <h1 style={{ color: "white", zIndex: "1" }}>개쩌는 웹사이트</h1>
      </header>
    </div>
  );
}
