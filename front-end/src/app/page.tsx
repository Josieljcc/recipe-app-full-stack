"use client";
import Image from "next/image";
import { useState } from "react";
import Input from "@/app/components/Input";
import Button from "./components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validations/loginSchema";
import { z } from "zod";
//

type LoginFormData = z.infer<typeof loginSchema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  function login(data: any) {
    console.log(data);
  }

  return (
    <main className="flex flex-col items-center justify-center bg-zinc-800 h-screen">
      <form
        onSubmit={handleSubmit(login)}
        className="flex rounded-md items-center 
        justify-center p-4 gap-4 flex-col w-[90%]
        bg-zinc-600"
        action="submit"
      >
        <Input type="email" register={register} placeholder="email" />
        {errors.email && (
          <span className="text-zinc-200">{errors.email.message}</span>
        )}
        <Input type="password" register={register} placeholder="password" />
        {errors.password && (
          <span className="text-zinc-200">{errors.password.message}</span>
        )}
        <Button type="submit">Entrar</Button>
      </form>
    </main>
  );
}
