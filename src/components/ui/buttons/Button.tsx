import { MouseEventHandler, ReactNode } from "react";

interface IButton {
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
  children: ReactNode;
}

function Button({ onClick, className = "", disabled, children }: IButton) {
  return (
    <div>
      <button
        className={` bg-slate-400 active:hover:bg-slate-300 border border-[#4b595e] rounded-md disabled:opacity-60 ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
