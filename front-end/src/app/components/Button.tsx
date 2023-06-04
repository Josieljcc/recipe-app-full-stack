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
      className={`bg-green-700 text-zinc-200 p-2 font-bold rounded-md
      disabled:bg-gray-400 disabled:cursor-not-allowed
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
