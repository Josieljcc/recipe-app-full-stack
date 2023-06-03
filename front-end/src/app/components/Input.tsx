import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type InputProps = {
  type: string;
  register: UseFormRegister<FieldValues> | any;
  placeholder: string;
  className?: string;
};

export default function Input({
  className,
  register,
  type,
  placeholder,
}: InputProps) {
  return (
    <input
      className={`bg-zinc-400 border-none
      w-full
      placeholder:text-zinc-600
       focus:outline-green-400
       rounded-md p-3 font-bold
       text-zinc-800 ${className}`}
      {...register(type)}
      type={type}
      placeholder={placeholder}
    />
  );
}
