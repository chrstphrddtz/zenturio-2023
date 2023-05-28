"use client";

import { useState } from "react";
// import { useRouter } from "next/router";

export default function LoginForm({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [access, setAccess] = useState("");
  const [refresh, setRefresh] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    if (!username || !password) {
      setErrorMessage("Please enter both username and password");
      return;
    }
    onSubmit(username, password, errorMessage).then((response) => {
      sessionStorage.setItem("access", response.access);
      sessionStorage.setItem("refresh", response.refresh);
      // setAccess(response.access);
      // setRefresh(response.refresh);
    });

    event.target.reset();
  }

  return (
    <form onSubmit={handleLogin} className="grid gap-2 w-80">
      <label htmlFor="username" className="text-2xl font-bold">
        Username
      </label>
      <input
        className="p-2 text-base border border-solid border-black rounded focus: decoration-solid decoration-2"
        id="username"
        name="username"
        type="text"
        placeholder="Enter Username ..."
        required
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password" className="text-2xl font-bold">
        Password
      </label>
      <input
        className="p-2 text-base border border-solid border-black rounded focus: decoration-solid decoration-2"
        id="password"
        name="password"
        type="password"
        placeholder="Enter Password ..."
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        // onClick={() => router.push("/dashboard")}
        className="bg-inherit p-1 mx-auto my-3 border-2 border-solid border-secondary rounded text-secondary text-2xl font-bold hover:decoration-solid hover:decoration-2"
      >
        Login
      </button>
    </form>
  );
}
