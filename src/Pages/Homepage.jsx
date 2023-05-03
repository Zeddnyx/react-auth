import React, { useEffect } from "react";

export default function Homepage() {
  const name = localStorage.getItem("name");
  const user = localStorage.getItem("user");
  const handleOut = () => {
    localStorage.removeItem("user");
  };

  useEffect(() => {
    if (!user) {
      // direct user to login page or whatever
      return;
    } else {
      return;
    }
  }, []);

  return (
    <section>
      <h1>
        Welcome Back <span>{name}</span>!
      </h1>
      <button onClick={handleOut}>Sign out</button>
    </section>
  );
}
