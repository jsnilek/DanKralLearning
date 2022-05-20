import React, { useState } from "react";
import Button from "@mui/material/Button";

export function SendText({ sendText }) {
  const defaultText = "text...";
  const [text, setText] = useState(defaultText);

  const onChange = (event) => setText(event.target.value);
  const onClick = () => {
    sendText(text);
    setText(defaultText);
  };

  return (
    <>
      <input value={text} onChange={onChange} />
      <Button onClick={onClick}>Send</Button>
    </>
  );
}
