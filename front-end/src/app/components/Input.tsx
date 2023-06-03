import React from "react";

type InputProps = {
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
  className?: string;
};

export default function Input({
  className,
  value,
  onChange,
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
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}
