import { useEffect, useRef } from "react";
import axios from "axios";

export default function State() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const refresh = () => {
    axios.get("/api/state").then((result) => {
      textareaRef.current!.value = JSON.stringify(result.data, undefined, 2);
    });
  };

  const set = () => {
    const newValue = textareaRef.current!.value;
    axios
      .put("/api/state", JSON.parse(newValue))
      .then(() => console.log("설정 완료"));
  };

  useEffect(refresh);

  return (
    <main>
      {/* pretty print state */}
      <textarea ref={textareaRef} />
      <button onClick={set}>Set State</button>
      <button onClick={refresh}>Refresh State</button>
    </main>
  );
}
