"use client";
import Image from "next/image";
import imgBg from "@/../public/initialBg.jpg";
import Button from "./components/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main
      className="flex relative flex-col py-10 pb-20 text-center
    text-zinc-300 font-bold items-center justify-between h-screen"
    >
      <Image
        className="absolute -z-10 top-0 left-0 object-cover w-full h-full"
        src={imgBg}
        alt="backgroud"
      ></Image>
      <div
        className="absolute -z-10 top-0 left-0 object-cover w-full h-full
        bg-gradient-to-b to-black/70 from-transparent"
      ></div>
      <div
        className="absolute -z-10 top-0 left-0 object-cover w-full h-full
        bg-gradient-to-t to-black/30 from-transparent"
      ></div>
      <p className="text-sm">50k+ Recipes</p>
      <div className="w-full flex flex-col gap-4 items-center justify-between">
        <h1 className="text-5xl font-bold leading-[4rem]">
          Let's <br /> Cooking
        </h1>
        <h2 className="text-base -mt-4">Find best recipes</h2>
        <Button
          onClick={() => router.push("/login")}
          type="button"
          className="w-[90%]"
        >
          Start Cooking ➤
        </Button>
      </div>
    </main>
  );
}
