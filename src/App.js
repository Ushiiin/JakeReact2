import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("さいしょ");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => {
    setOpen(!open);
  };

  // useCAllbackで囲わないとレンダリング時に毎回新しい関数を作ってしまう。
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
