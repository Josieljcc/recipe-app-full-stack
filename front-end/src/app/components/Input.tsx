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
      className={`border-2 focus:border-zinc-700
        w-full focus:outline-double bg-zinc-100
        outline-zinborder-zinc-700

       rounded-md p-3 font-bold ps-4
       text-zinc-800 ${className}`}
      {...register(type)}
      type={type}
      placeholder={placeholder}
    />
  );
}
