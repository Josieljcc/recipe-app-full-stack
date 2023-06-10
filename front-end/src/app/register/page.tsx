"use client";
import Image from "next/image";
import { useState } from "react";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import imgBg from "@/../public/loginBg.jpg";
import { registerSchema } from "@/app/validations/registerSchema";
import { postApi } from "../utils/apiFunctions";
import { useRouter } from "next/navigation";

type LoginFormData = z.infer<typeof registerSchema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(registerSchema),
  });
  const router = useRouter();

  async function login(data: LoginFormData) {
    postApi(data);
    router.push("/login");
  }

  return (
    <main className="flex flex-col items-center justify-center relative h-screen">
      <Image
        className="absolute brightness-90 -z-10 top-0 object-cover w-full h-full"
        src={imgBg}
        alt="backgroud"
      ></Image>
      <div
        className="absolute -z-10 top-0 left-0 object-cover w-full h-full
        bg-gradient-to-b to-black/70 from-transparent"
      ></div>
      <div
        className="absolute -z-10 top-0 left-0 object-cover w-full h-full
        bg-gradient-to-t to-black/60 from-transparent"
      ></div>
      <form
        onSubmit={handleSubmit(login)}
        className="flex rounded-md items-center 
        justify-center p-4 py-10 gap-4 flex-col w-[90%]
        bg-black/70"
        action="submit"
      >
        <Input type="name" register={register} placeholder="Name" />
        {errors.name && (
          <span className="text-red-600 text-sm">{errors.name.message}</span>
        )}
        <Input type="email" register={register} placeholder="Email" />
        {errors.email && (
          <span className="text-red-600 text-sm">{errors.email.message}</span>
        )}
        <Input type="password" register={register} placeholder="Password" />
        {errors.password && (
          <span className="text-red-600 text-sm">
            {errors.password.message}
          </span>
        )}
        <Button disabled={!isValid} className="w-full" type="submit">
          Register
        </Button>
      </form>
    </main>
  );
}
