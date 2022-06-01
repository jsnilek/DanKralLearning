import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TextEdit } from "./TextEdit";
import { HeartBox } from "./HeartBox";

export function Node({ node, deleteNode, changeNode, setNodeDone }) {
  const [editable, setEditable] = useState(false);
  return (
    <>
      <div>
        <HeartBox done={node.done} setDone={setNodeDone} />
        <TextEdit
          text={node.text}
          isEditable={editable}
          textEdited={changeNode}
        />
        <Button
          onClick={() => {
            setEditable(!editable);
          }}
        >
          Edit
        </Button>
        <Button onClick={deleteNode}>DELETE</Button>
      </div>
    </>
  );
}
