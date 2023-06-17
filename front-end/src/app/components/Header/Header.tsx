import React from "react";
import Input from "../Input";
import { useForm } from "react-hook-form";
import Image from "next/image";

import { AiOutlineSearch } from "react-icons/ai";
import doodle from "@/../public/doodle.svg";

function Header() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="fixed top-0 left-0 h-36 w-full z-30 rounded-b-3xl shadow-lg shadow-zinc-950/60 flex justify-center items-center">
      <div className="absolute w-full h-full top-0 rounded-b-3xl bg-zinc-800" />
      <div className="absolute w-full h-full top-0 rounded-b-3xl bg-gradient-to-t from-red-600/30 to-transparent" />
      <Image
        className="absolute top-0 w-full h-full object-cover rounded-b-3xl text-black/40"
        src={doodle}
        alt="doodle"
      />
      <form className="z-30 absolute">
        <Input
          className="relative bg-zinc-400"
          type="search"
          register={register}
          placeholder="Search recipes"
        />
        <button
          className="absolute right-4 text-zinc-600 h-full mx-0 my-auto text-2xl"
          type="button"
        >
          <AiOutlineSearch className="text-3xl" />
        </button>
      </form>
    </div>
  );
}

export default Header;
