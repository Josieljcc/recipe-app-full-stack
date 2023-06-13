import React from "react";

type ButtonProp = {
  type: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  children: string;
  className?: string;
  disabled?: boolean;
};

function Button({ onClick, type, children, className, disabled }: ButtonProp) {
  return (
    <button
      className={`bg-red-600 text-zinc-200 p-2 font-bold rounded-md
      disabled:bg-gray-400 disabled:text-zinc-500 disabled:cursor-not-allowed
      ease-in-out duration-150
      ${className}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
