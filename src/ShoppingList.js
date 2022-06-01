import React, { useState } from "react";
import { SendText } from "./SendText";
import { Node } from "./Node";

export function ShoppingList() {
  const [nodes, setNodes] = useState([]);

  const onMessageSent = (node) => {
    const newTodo = [node, ...nodes];
    setNodes(newTodo);
  };

  const onMessageChange = (index, nodeText) => {
    const newTodo = [...nodes];
    const node = newTodo[index];
    node.text = nodeText;
    newTodo[index] = node;
    setNodes(newTodo);
  };

  const onDoneClick = (index) => () => {
    const newTodo = [...nodes];
    const node = newTodo[index];
    node.done = !node.done;
    newTodo[index] = node;
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
          <Node
            key={index}
            node={node}
            deleteNode={onMessageDelete(index)}
            changeNode={(text) => onMessageChange(index, text)}
            setNodeDone={onDoneClick(index)}
          />
        );
      })}
      <footer>
        Completed{" "}
        {nodes.reduce((acc, cur) => {
          return acc + cur.done;
        }, 0)}
        /{nodes.length} tasks.
        <br /> Good job. Go play some Elden Ring!
      </footer>
    </>
  );
}
