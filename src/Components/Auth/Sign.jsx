import React from "react";

export default function Sign({ onClick }) {
  return (
    <div className="flex justify-center">
      <button onClick={onClick}>Login with Google</button>
    </div>
  );
}
