import React from "react";

type ButtonProp = {
  type: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  children: string;
  className?: string;
};

function Button({ onClick, type, children, className }: ButtonProp) {
  return (
    <button
      className={`bg-green-700 text-zinc-200 p-2 font-bold rounded-md
      ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
