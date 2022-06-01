import React, { useState } from "react";
import Button from "@mui/material/Button";

export function SendText({ sendText }) {
  const defaultText = "text...";
  const [nodeText, setNodeText] = useState(defaultText);

  const onChange = (event) => setNodeText(event.target.value);
  const onClick = () => {
    const node = { text: nodeText, done: false };
    sendText(node);
    setNodeText(defaultText);
  };

  return (
    <>
      <div className="SendText">
        <input value={nodeText} onChange={onChange} />
        <Button onClick={onClick}>Send</Button>
      </div>
    </>
  );
}
