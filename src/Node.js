import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TextEdit } from "./TextEdit";
import { HeartBox } from "./HeartBox";

export function Node({ text, deleteNode, edit }) {
  const [editable, setEditable] = useState(false);
  const [nodeText, setNodeText] = useState(text);
  return (
    <>
      <div>
        <HeartBox />
        <TextEdit
          text={nodeText}
          isEditable={editable}
          textEdited={setNodeText}
        />
        <Button
          onClick={() => {
            setEditable(!editable);
            edit(nodeText);
          }}
        >
          Edit
        </Button>
        <Button onClick={deleteNode}>DELETE</Button>
      </div>
    </>
  );
}
