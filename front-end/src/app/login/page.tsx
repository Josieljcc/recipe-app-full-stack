"use client";
import Image from "next/image";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/app/validations/loginSchema";
import { z } from "zod";
import imgBg from "@/../public/loginBg.jpg";
import Link from "next/link";
import { postLogin } from "../utils/apiFunctions";
import { useRouter } from "next/navigation";
import { IUserLogin } from "../interfaces/IUserLogin";

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  async function login(data: LoginFormData) {
    const user: IUserLogin = await postLogin(data);
    localStorage.setItem("user", JSON.stringify(user));
    router.push("/home/0");
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
          Enter
        </Button>
        <Link
          className="text-zinc-300 text-sm underline hover:font-bold"
          href={"/register"}
        >
          Don't have a acount?
        </Link>
      </form>
    </main>
  );
}
