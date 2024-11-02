import { ReactNode } from "react";

interface IBaseTile {
  children: ReactNode;
  className?: string;
}

function BaseTile({ children, className = "" }: IBaseTile) {
  return (
    <div className={`border border-[#4b595e] rounded-lg p-2 ${className}`}>
      {children}
    </div>
  );
}

export default BaseTile;
