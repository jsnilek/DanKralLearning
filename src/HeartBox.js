import React from "react";
import { useState } from "react";

export function HeartBox() {
  const [done, setDone] = useState(false);
  return (
    <>
      <span onClick={() => setDone(!done)} style={{ color: done ? "red" : "" }}>
        ❤
      </span>
    </>
  );
}
