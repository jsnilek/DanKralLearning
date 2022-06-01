import React from "react";

export function HeartBox({ done, setDone }) {
  return (
    <>
      <span onClick={setDone} style={{ color: done ? "red" : "" }}>
        ❤{" "}
      </span>
    </>
  );
}
