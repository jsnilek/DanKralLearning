import React, { useState } from "react";
import { SendText } from "./SendText";
import { Node } from "./Node";

export function ShoppingList() {
  const [nodes, setNodes] = useState([]);

  const onMessageSent = (text) => {
    const newTodo = [text, ...nodes];
    setNodes(newTodo);
  };

  const onMessageChange = (text) => {
    console.log(text);
    //const newTodo = (nodes[index] = text);
    //setNodes(newTodo);
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
          <Node
            key={index}
            text={node}
            deleteNode={onMessageDelete(index)}
            edit={onMessageChange}
          />
        );
      })}
      <footer>
        Completed {nodes.length}/{nodes.length} tasks.
        <br /> Good job. Go play some Elden Ring!
      </footer>
    </>
  );
}
