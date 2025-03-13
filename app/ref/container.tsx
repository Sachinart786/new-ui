"use client";
import React, { useRef } from "react";

export const PageContainer = () => {
  const email = useRef("");
  const password = useRef("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(email.current, password.current);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
  
        type="email"
        value={email.current}
        onChange={(e) => (email.current = e.target.value)}
      />
      <input
        type="password"
        value={password.current}
        onChange={(e) => (password.current = e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
