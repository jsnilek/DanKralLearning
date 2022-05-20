import React from "react";

export function Node({ text, deleteNode }) {
  return (
    <>
      <div>
        <span>{text}</span> <span onClick={deleteNode}>X</span>
      </div>
    </>
  );
}
