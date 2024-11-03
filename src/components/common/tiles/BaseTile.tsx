import { ReactNode } from "react";

interface IBaseTile {
  children: ReactNode;
  className?: string;
  testId?: string;
  onClick?: () => void;
}

function BaseTile({ children, className = "", testId, onClick }: IBaseTile) {
  return (
    <div
      test-id={testId}
      className={`border border-[#4b595e] rounded-lg p-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default BaseTile;
