import React, { useState, useRef } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("Aniket");

  const testRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name} Email: ${email}`);
    setName("");
    setEmail("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={() => setName(testRef.current.value)}
        type="text"
        placeholder="name"
        ref={testRef}
        // value={name}
        required
      />
      {name}
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
