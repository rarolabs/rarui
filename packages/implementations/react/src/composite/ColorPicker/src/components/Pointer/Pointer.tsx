import React from "react";

const Pointer = () => (
  <div
    style={{
      width: "14px",
      height: "14px",
      backgroundColor: "transparent",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "-4px",
      left: "-12px",
      borderStyle: "solid",
      borderWidth: "3px",
      borderColor: "black",
    }}
  >
    <div
      style={{
        width: "8px",
        height: "8px",
        backgroundColor: "transparent",
        borderRadius: "12px",
        borderStyle: "solid",
        borderWidth: "3px",
        borderColor: "white",
      }}
    />
  </div>
);
export { Pointer };
