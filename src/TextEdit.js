import React from "react";

export function TextEdit({ text, isEditable, textEdited }) {
  if (isEditable) {
    return (
      <>
        <input
          defaultValue={text}
          onChange={(event) => textEdited(event.target.value)}
        />
      </>
    );
  } else {
    return <>{text}</>;
  }
}
