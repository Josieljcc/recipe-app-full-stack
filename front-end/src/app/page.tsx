"use client";
import Image from "next/image";
import { useState } from "react";
import Input from "@/app/components/Input";
import Button from "./components/Button";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="flex flex-col items-center justify-center bg-zinc-800 h-screen">
      <form
        className="flex rounded-md items-center 
        justify-center p-4 gap-4 flex-col w-[90%]
        bg-zinc-600"
        action="submit"
      >
        <Input
          type="email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          placeholder="password"
        />
        <Button type="button" onClick={() => {}}>
          Entrar
        </Button>
      </form>
    </main>
  );
}
