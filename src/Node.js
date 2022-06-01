import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TextEdit } from "./TextEdit";
import { HeartBox } from "./HeartBox";

export function Node({ node, deleteNode, changeNode, setNodeDone }) {
  const [editable, setEditable] = useState(false);
  return (
    <>
      <div className="NodeBox">
        <div className="HeartBox">
          <HeartBox done={node.done} setDone={setNodeDone} />
        </div>
        <div className="TextEdit">
          <TextEdit
            text={node.text}
            isEditable={editable}
            textEdited={changeNode}
          />
        </div>
        <div className="Button-edit">
          <Button
            onClick={() => {
              setEditable(!editable);
            }}
          >
            Edit
          </Button>
        </div>
        <div className="Button-delete">
          <Button onClick={deleteNode}>DELETE</Button>
        </div>
      </div>
    </>
  );
}
