import React, { useState } from "react";
import { SendText } from "./SendText";
import { Node } from "./Node";

export function TodoList() {
  const [nodes, setNodes] = useState([]);

  const onMessageSent = (text) => {
    const newTodo = [text, ...nodes];
    setNodes(newTodo);
  };
  const onMessageDelete = (nodeIndex) => () => {
    const newTodo = nodes.filter((node, index) => index !== nodeIndex);
    setNodes(newTodo);
  };

  return (
    <>
      <SendText sendText={onMessageSent} />

      {nodes.map((node, index) => {
        return (
          <Node key={index} text={node} deleteNode={onMessageDelete(index)} />
        );
      })}
    </>
  );
}
