import React, { useState, useEffect } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import Homepage from "../../Pages/Homepage";
import Sign from "./Sign";

export default function Login() {
  const [value, setValue] = useState("");
  const handleSign = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.accessToken);
      localStorage.setItem("user", data.user.accessToken);
      localStorage.setItem("name", data.user.displayName);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("user"));
  }, []);

  return (
    <section>{value ? <Homepage /> : <Sign onClick={handleSign} />}</section>
  );
}
