import React from "react";

export function TextEdit({ text, isEditable, textEdited }) {
  return isEditable ? (
    <>
      <input
        defaultValue={text}
        onChange={(event) => textEdited(event.target.value)}
      />
    </>
  ) : (
    <>{text}</>
  );
}
