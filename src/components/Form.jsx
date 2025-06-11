import React, { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name} Email: ${email}`)
    setName("")
    setEmail("")
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder="name"
        value={name}
        required
      />
      <input
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        placeholder="email"
        value={email}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
