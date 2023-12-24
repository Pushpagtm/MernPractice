import axios from "axios";
import React from "react";
import { useState } from "react";
function RegisterUser(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function registerUser(event) {
    event.preventDefault();
    await axios
      .post("/api/v1/users/register", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
      });
  }
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </>
  );
}

export default RegisterUser;
